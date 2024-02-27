"use server";

import { cookies } from "next/headers";
import stripeClient from "~/libraries/stripe/Stripe";

class Client {
  constructor(public readonly clientId: string) {
    Object.freeze(this);
  }
}

interface ParamsProps {
  fullname: string;
  email: string;
}

const createNewClient = async (params: ParamsProps): Promise<Client> => {
  const customer = await stripeClient().customers.create({
    name: params.fullname,
    email: params.email
  });

  cookies().set("clientId", customer.id);
  return { clientId: customer.id };
};

export default createNewClient;
