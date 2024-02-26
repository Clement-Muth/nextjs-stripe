"use server";

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

  return { clientId: customer.id };
};

export default createNewClient;
