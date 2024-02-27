import { Stripe, StripeCardNumberElement } from "@stripe/stripe-js";
import StripeError from "stripe";
import createPaymentMethod from "~/app/(stripe)/add-payment-methods/views/Form/createPaymentMethod";
import attachPaymentMethod from "~/app/api/attachPaymentMethod";
import createNewClient from "~/app/api/createNewClient";
import FormError from "~/core/FormError";
import StripeErr from "~/libraries/stripe/stripeError";

export default class newPaymentMethod {
  constructor(
    private clientId: string | undefined,
    private readonly country: string,
    private readonly zipCode: string,
    private readonly email: string,
    private readonly name: string
  ) {}

  private _createNewClient = async () => {
    const newCustomer = await createNewClient({
      fullname: this.name,
      email: this.email
    });

    return newCustomer;
  };

  private _createPaymentMethod = async (stripe: Stripe, cardElement: StripeCardNumberElement) => {
    return await createPaymentMethod({
      stripe,
      cardElement: cardElement,
      billingDetails: {
        address: { zipCode: this.zipCode, country: this.country },
        email: this.email,
        name: this.name
      }
    });
  };

  public addNewPaymentMethod = async (stripe: Stripe, cardElement: StripeCardNumberElement) => {
    try {
      if (!this.clientId) this.clientId = (await this._createNewClient()).clientId;

      const paymentMethod = await this._createPaymentMethod(stripe, cardElement);

      await attachPaymentMethod({
        paymentMethodId: paymentMethod.paymentMethodId,
        customerId: this.clientId!
      });

      return { success: true };
    } catch (err) {
      if (err instanceof StripeErr.Error)
        throw new FormError(err.code ?? err.declineCode, "root", err.message);
      if (err instanceof StripeError.errors.StripeError)
        throw new FormError("unknown", "root", "An error occured during the payment, please try again.");
      throw err;
    }
  };
}
