import { ReactNode } from "react";
import PageContainer from "~/components/PageContainer/PageContainer";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Layout;
