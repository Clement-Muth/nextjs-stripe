"use server";

import stripeClient from "~/libraries/stripe/Stripe";

interface ParamsProps {
  paymentMethodId: string;
  customerId: string;
}

/**
 * The function `attachPaymentMethod` attaches a payment method to a customer using
 * the Stripe API.
 *
 * Args:
 *   customerId (string): The `customerId` parameter is a string that represents
 * the ID of the customer for whom the paymentMethod is being attached.
 *   accountId (string): The `accountId` parameter is a string that represents the
 * ID of the account associated with the paymentMethod.
 *   paymentMethodId (string): The `paymentMethodId` parameter is the ID of the
 * payment method that the customer wants to attached.
 */
const attachPaymentMethod = async (params: ParamsProps): Promise<void> => {
  await stripeClient().paymentMethods.attach(params.paymentMethodId, {
    customer: params.customerId
  });
};

export default attachPaymentMethod;
