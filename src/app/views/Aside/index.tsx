"use client";

import { Accordion, AccordionItem, Link, ScrollShadow } from "@nextui-org/react";
import LinkNext from "next/link";

const Aside = () => {
  return (
    <ScrollShadow
      orientation="vertical"
      className="flex h-[calc(100dvh-128px)] sticky top-[64px] w-[256px] pt-5"
    >
      <Accordion showDivider={false} isCompact className="w-full" defaultExpandedKeys="1">
        <AccordionItem key={0} aria-label="Accordion 0" title="Guides">
          <nav className="pl-8 pb-2">
            <ul className="flex flex-col list-disc gap-y-4">
              <li>
                <Link as={LinkNext} href="/add-payment-methods" className="text-black opacity-80">
                  Introduction
                </Link>
              </li>
              <li>
                <Link as={LinkNext} href="/get-payment-methods" className="text-black opacity-80">
                  Installation
                </Link>
              </li>
            </ul>
          </nav>
        </AccordionItem>
        <AccordionItem key={1} aria-label="Accordion 1" title="Customer">
          <nav className="pl-8 pb-2">
            <ul className="flex flex-col list-disc gap-y-4">
              <li>
                <Link as={LinkNext} href="/add-payment-methods" className="text-black opacity-80">
                  Create Customer
                </Link>
              </li>
              <li>
                <Link as={LinkNext} href="/get-payment-methods" className="text-black opacity-80">
                  Retrieve Customer
                </Link>
              </li>
              <li>
                <Link as={LinkNext} href="/delete-payment-methods" className="text-black opacity-80">
                  Delete Customer
                </Link>
              </li>
            </ul>
          </nav>
        </AccordionItem>
        <AccordionItem key={2} aria-label="Accordion 2" title="Payment Methods">
          <nav className="pl-8 pb-2">
            <ul className="flex flex-col list-disc gap-y-4">
              <li>
                <Link as={LinkNext} href="/add-payment-methods" className="text-black opacity-80">
                  Add Payment Methods
                </Link>
              </li>
              <li>
                <Link as={LinkNext} href="/get-payment-methods" className="text-black opacity-80">
                  List Payment Methods
                </Link>
              </li>
              <li>
                <Link as={LinkNext} href="/delete-payment-methods" className="text-black opacity-80">
                  Delete Payment Methods
                </Link>
              </li>
            </ul>
          </nav>
        </AccordionItem>
        <AccordionItem key={3} aria-label="Accordion 3" title="Invoices">
          <nav className="pl-8 pb-2">
            <ul className="flex flex-col list-disc gap-y-4">
              <li>
                <Link as={LinkNext} href="/add-payment-methods" className="text-black opacity-80">
                  Create Invoice
                </Link>
              </li>
              <li>
                <Link as={LinkNext} href="/get-payment-methods" className="text-black opacity-80">
                  Retrieve Invoice
                </Link>
              </li>
            </ul>
          </nav>
        </AccordionItem>
      </Accordion>
    </ScrollShadow>
  );
};

export default Aside;
