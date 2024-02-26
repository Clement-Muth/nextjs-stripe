"use client";

import { Elements } from "@stripe/react-stripe-js";
import { ReactNode } from "react"
import getStripe from "~/libraries/stripe/getStripe";

export interface ElementsProviderProps {
  children: ReactNode;
}

const ElementsProvider = ({ children }: ElementsProviderProps) => {
  return (
    <Elements
      stripe={getStripe()}
      options={{
        locale: "en",
        currency: "usd",
        appearance: {
          theme: "flat",
        }
      }}
    >
      {children}
    </Elements>
  );
};

export default ElementsProvider;