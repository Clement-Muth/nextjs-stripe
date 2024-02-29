"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import NextLink from "next/link";
import DeleteClient from "~/core/DeleteClient";

export interface HeaderContentProps {
  clientId?: string;
}

const HeaderContent = ({ clientId }: HeaderContentProps) => {
  return (
    <Navbar
      className="[&>header]:max-w-[1280px]"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary"
        ]
      }}
    >
      <NavbarBrand>
        <Link href="/" className="text-2xl text-inherit">
          Nextjs Stripe
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem key="add payment method" href="/stripe-payment/payment-methods/create" as={NextLink}>
          Stripe Payment
        </NavbarItem>
        <NavbarItem key="list_payment_methods" href="/stripe-connect" as={NextLink}>
          Stripe Connect
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <DeleteClient clientId={clientId} />
        </NavbarItem>
        <NavbarItem>
          <Button
            color="default"
            variant="solid"
            href="https://www.buymeacoffee.com/clementmuth"
            target="_blank"
            size="md"
            as={Link}
            startContent={
              <svg
                aria-hidden="true"
                focusable="false"
                height="24"
                role="presentation"
                viewBox="0 0 24 24"
                width="24"
                className="text-danger group-data-[hover=true]:animate-heartbeat"
                tabIndex={-1}
              >
                <path
                  d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
            }
          >
            Support
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderContent;
