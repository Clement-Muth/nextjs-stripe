"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { chapterMenuPaymentMethodsCreate } from "~/app/stripe-payment/payment-methods/create/views/constants";
import Aside from "~/app/stripe-payment/views/Aside";
import Chapter from "~/app/stripe-payment/views/Chapter/Chapter";

export interface templateProps {
  children: ReactNode;
}

const template = ({ children }: templateProps) => {
  const pathname = usePathname();

  return (
    <>
      <Aside />
      {children}
      <Chapter items={pathname.includes("payment-methods/create") ? chapterMenuPaymentMethodsCreate : []} />
    </>
  );
};

export default template;
