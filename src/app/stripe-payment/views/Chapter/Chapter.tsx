"use client";

import { Accordion, AccordionItem, Link, ScrollShadow } from "@nextui-org/react";
import { ReactNode } from "react";
import LinkNext from "next/link";

export interface ChapterProps {
  items: { href: string; label: string }[];
}

const Chapter = ({ items }: ChapterProps) => {
  return (
    <ScrollShadow
      orientation="vertical"
      className="flex flex-col h-[calc(100dvh-128px)] sticky top-[64px] w-[256px] pt-5"
    >
      <nav className="pl-2 pb-2">
        <ul className="flex flex-col gap-y-4">
          <li>
            <Link as={LinkNext} href="/add-payment-methods" className="text-black opacity-80" scroll>
              Introduction
            </Link>
          </li>
        </ul>
      </nav>
      <Accordion showDivider={false} isCompact className="w-full" defaultExpandedKeys="0">
        <AccordionItem key={0} aria-label="Accordion 0" title="Usage">
          <nav className="pl-6 pb-2">
            <ul className="flex flex-col gap-y-4">
              {items.map((item) => (
                <li>
                  <Link
                    as={LinkNext}
                    href={item.href}
                    className="text-black opacity-80"
                    key={item.label}
                    scroll
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </AccordionItem>
      </Accordion>
    </ScrollShadow>
  );
};

export default Chapter;
