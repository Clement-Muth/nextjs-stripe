import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: ContainerProps) => {
  return <main className="flex flex-col w-full justify-center items-center gap-y-10">{children}</main>;
};

export default PageContainer;
