"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import AddPaymentMethodForm from "~/app/(stripe)/add-payment-methods/views/Form";
import onDark from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import { Prism } from "react-syntax-highlighter";

export interface AddPaymentMethodsProps {
  clientId: string;
}

const AddPaymentMethods = ({ clientId }: AddPaymentMethodsProps) => {
  return (
    <Tabs variant="underlined">
      <Tab key="form" title="preview">
        <AddPaymentMethodForm clientId={clientId} />
      </Tab>
      <Tab key="code" title="code" aria-label="Code demo tabs" className="max-h-[50vh]">
        <Prism language="typescript" className="h-full rounded-lg !bg-[rgb(14_12_12)]" style={onDark}>
          {`import type { Stripe, StripeCardNumberElement } from "@stripe/stripe-js";
import StripeError from "~/libraries/stripe/stripeError";

export type Brand =
  | "American Express"
  | "Diners Club"
  | "Discover"
  | "JCB"
  | "mastercard"
  | "UnionPay"
  | "visa";

export class PaymentMethod {
  constructor(
    public readonly paymentMethodId: string,
    public readonly fingerprint: string,
    public readonly brand: Brand,
    public readonly last4: string
  ) {
    Object.freeze(this);
  }
}

export type BillingDetails = {
  address: {
    zipCode: string;
    country: string;
  };
  name?: string;
  phone?: string;
  email?: string;
};

type Params = {
  stripe: Stripe;
  cardElement: StripeCardNumberElement;
  billingDetails: BillingDetails;
};

const createPaymentMethod = async ({
  stripe,
  cardElement,
  billingDetails
}: Params): Promise<PaymentMethod> => {
  const { error, paymentMethod } = await stripe.createPaymentMethod({
    card: cardElement,
    type: "card",
    billing_details: {
      ...billingDetails,
      address: {
        country: billingDetails.address.country,
        postal_code: billingDetails.address.zipCode
      }
    }
  });

  if (error) {
    switch (error.code) {
      case "expired_card":
        throw new StripeError.Error({
          code: StripeError.Errors.cardCode.expiredCard,
          message: "The card has expired. Check the expiration date or use a different card."
        });
      case "incorrect_cvc":
        throw new StripeError.Error({
          code: StripeError.Errors.cardCode.incorrectCvc,
          message:
            "The card’s security code is incorrect. Check the card’s security code or use a different card."
        });
      case "incorrect_number":
        throw new StripeError.Error({
          code: StripeError.Errors.cardCode.incorrectNumber,
          message: "The card number is incorrect. Check the card’s number or use a different card."
        });
      default:
        throw new StripeError.Error({
          code: StripeError.Errors.cardCode.unknown,
          message: error?.message ?? "An error occured during the payment, please try again."
        });
    }
  } else
    return {
      paymentMethodId: paymentMethod.id,
      brand: paymentMethod.card?.brand as Brand,
      fingerprint: paymentMethod.card?.fingerprint!,
      last4: paymentMethod.card?.last4!
    };
};

export default createPaymentMethod;
`}
        </Prism>
      </Tab>
    </Tabs>
  );
};

export default AddPaymentMethods;
