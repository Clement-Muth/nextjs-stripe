import Stripe from "stripe";
import stripeClient from "~/libraries/stripe/Stripe";

const getClient = async (clientId?: string) => {
  if (!clientId) throw new Stripe.errors.StripeError({ type: "api_error", code: "no_customer" });

  const client = await stripeClient().customers.retrieve(clientId);

  if (client.deleted) throw new Stripe.errors.StripeError({ type: "api_error", code: "no_customer" });

  return client;
};

export default getClient;
