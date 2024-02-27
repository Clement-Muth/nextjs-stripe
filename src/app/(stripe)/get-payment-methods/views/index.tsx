"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import onDark from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import { Prism } from "react-syntax-highlighter";
import PaymentMethods from "~/app/(stripe)/get-payment-methods/views/PaymentMethods";
import PaymentMethod from "~/types/stripe/PaymentMethod";
import codeGetPaymentMethods from "~/app/(stripe)/get-payment-methods/views/code";

export interface GetPaymentMethodsProps {
  paymentMethods: PaymentMethod[] | null;
}

const GetPaymentMethods = ({ paymentMethods }: GetPaymentMethodsProps) => {
  return (
    <Tabs variant="underlined">
      <Tab key="form" title="Preview">
        <PaymentMethods paymentMethods={paymentMethods} />
      </Tab>
      <Tab key="code" title="Code" aria-label="Code demo tabs" className="max-h-[50vh]">
        <Prism language="typescript" className="h-full rounded-lg !bg-[rgb(14_12_12)]" style={onDark}>
          {codeGetPaymentMethods}
        </Prism>
      </Tab>
    </Tabs>
  );
};

export default GetPaymentMethods;
