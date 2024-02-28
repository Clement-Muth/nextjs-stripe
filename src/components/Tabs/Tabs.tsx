"use client";

import { ReactNode } from "react";
import { Tab, Tabs as NextTabs } from "@nextui-org/tabs";
import onDark from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import { Prism } from "react-syntax-highlighter";

export interface TabsProps {
  children: ReactNode;
  code: string;
}

const Tabs = ({ children, code }: TabsProps) => {
  return (
    <NextTabs variant="underlined">
      <Tab key="form" title="Preview">
        {children}
      </Tab>
      <Tab
        key="code"
        title="Code"
        aria-label="Code demo tabs"
        className="max-h-[50vh] [&>pre]:max-w-[592px] [&>pre]:max-h-[500px] [&>pre]:!overflow-x-auto"
      >
        <Prism language="typescript" className="h-full rounded-lg !bg-[rgb(14_12_12)]" style={onDark}>
          {code}
        </Prism>
      </Tab>
    </NextTabs>
  );
};

export default Tabs;
