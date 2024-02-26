import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = (stripeAccount?: string) => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY, { stripeAccount: stripeAccount });
  }
  return stripePromise;
};

export default getStripe;
