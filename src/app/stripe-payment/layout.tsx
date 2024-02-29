import { ReactNode } from "react";
import Aside from "~/app/stripe-payment/views/Aside";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-[256px_1fr_256px]">
      <Aside />
      {children}
    </div>
  );
};

export default Layout;
