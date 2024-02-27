"use server";

import { revalidateTag } from "next/cache";
import stripeClient from "~/libraries/stripe/Stripe";

interface ParamsProps {
  paymentMethodId: string;
}

const deletePaymentMethod = async (params: ParamsProps): Promise<void> => {
  await stripeClient().paymentMethods.detach(params.paymentMethodId);

  revalidateTag("getPaymentMethods");
};

export default deletePaymentMethod;
