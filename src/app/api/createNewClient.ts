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
  const client = await stripeClient().customers.create({
    name: params.fullname,
    email: params.email
  });

  cookies().set("clientId", client.id);

  return { clientId: client.id };
};

export default createNewClient;
