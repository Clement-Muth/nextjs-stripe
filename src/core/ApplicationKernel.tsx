"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react"

export interface ApplicationKernelProps {
  children: ReactNode;
}

const ApplicationKernel = ({ children }: ApplicationKernelProps) => {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  );
};

export default ApplicationKernel;