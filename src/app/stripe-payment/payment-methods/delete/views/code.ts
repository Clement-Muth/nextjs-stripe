const codeDeletePaymentMethods = `"use server";

import stripeClient from "~/libraries/stripe/Stripe";

interface ParamsProps {
  paymentMethodId: string;
}

const deletePaymentMethod = async (params: ParamsProps): Promise<void> => {
  await stripeClient().paymentMethods.detach(params.paymentMethodId);
};

export default deletePaymentMethod;
`;

export default codeDeletePaymentMethods;
