import Stripe from "stripe";

const stripeClient = (stripeAccount?: string | undefined) =>
  new Stripe(process.env.STRIPE_SECRET_KEY, {
    typescript: true,
    apiVersion: "2023-10-16",
    stripeAccount
  });

export default stripeClient;
