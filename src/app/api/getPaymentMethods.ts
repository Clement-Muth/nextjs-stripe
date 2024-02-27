"use server";

import { cache } from "react";
import stripeClient from "~/libraries/stripe/Stripe";
import PaymentMethod, { Brand } from "~/types/stripe/PaymentMethod";

const getPaymentMethods = cache(async (clientId: string): Promise<PaymentMethod[] | null> => {
  const cards = (await stripeClient().customers.listPaymentMethods(clientId))?.data.map((card) => ({
    ...card,
    ...card.card,
    name: card.billing_details.name,
    id: card.id
  }));

  if (!cards) return null;

  return cards.map((card) => ({
    paymentMethodId: card.id,
    fingerprint: card.fingerprint!,
    name: card.name,
    billing: {
      city: null,
      country: card.country!,
      line1: null,
      line2: null,
      state: null,
      zip: null
    },
    last4: card.last4!,
    exp: {
      month: card.exp_month!,
      year: card.exp_year!
    },
    brand: card.brand as Brand
  }));
});

export default getPaymentMethods;
