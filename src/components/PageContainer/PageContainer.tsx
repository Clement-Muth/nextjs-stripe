import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: ContainerProps) => {
  return <main className="flex flex-col w-full mt-20 gap-y-10 lg:px-16">{children}</main>;
};

export default PageContainer;
