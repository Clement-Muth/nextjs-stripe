"use server";

import { cookies } from "next/headers";
import stripeClient from "~/libraries/stripe/Stripe";

const deleteClient = async (clientId: string) => {
  await stripeClient().customers.del(clientId);
  cookies().delete("clientId");
};

export default deleteClient;
