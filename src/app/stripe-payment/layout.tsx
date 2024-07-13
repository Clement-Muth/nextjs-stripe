"use client";

import { ReactNode, useEffect } from "react";
import Aside from "~/app/stripe-payment/views/Aside";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    console.log("layout changed");
  }, []);

  return <div className="grid lg:grid-cols-[256px_1fr] xl:grid-cols-[256px_1fr_256px]">{children}</div>;
};

export default Layout;
