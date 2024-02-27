"use client";

import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import DeleteClient from "~/core/DeleteClient";
import NextLink from "next/link";

export interface HeaderContentProps {
  clientId?: string;
}

const HeaderContent = ({ clientId }: HeaderContentProps) => {
  return (
    <Navbar
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
        <Link href="/" className="font-bold text-inherit">
          Nextjs Stripe Example
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                // endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Payment methods
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Payment methods"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4"
            }}
          >
            <DropdownItem
              key="add payment method"
              description="Create a new payment method."
              href="/add-payment-methods"
              as={NextLink}
            >
              Add Payment Method
            </DropdownItem>
            <DropdownItem
              key="list_payment_methods"
              description="List payment methods attached to a customer."
              href="/get-payment-methods"
              as={NextLink}
            >
              List Payment Methods
            </DropdownItem>
            <DropdownItem
              key="delete_payment_methods"
              description="Delete a payment method."
              href="/delete-payment-methods"
              // startContent={icons.flash}
            >
              Delete Payment Methods
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                // endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Customer
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Payment methods"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4"
            }}
          >
            <DropdownItem
              key="add payment method"
              description="Create a new payment method."
              href="/add-payment-methods"
              as={NextLink}
            >
              Add Payment Method
            </DropdownItem>
            <DropdownItem
              key="list_payment_methods"
              description="List payment methods attached to a customer."
              href="/get-payment-methods"
              as={NextLink}
            >
              List Payment Methods
            </DropdownItem>
            <DropdownItem
              key="delete_payment_methods"
              description="Delete a payment method."
              href="/delete-payment-methods"
              // startContent={icons.flash}
            >
              Delete Payment Methods
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                // endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Invoices
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Payment methods"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4"
            }}
          >
            <DropdownItem
              key="add payment method"
              description="Create a new payment method."
              href="/add-payment-methods"
              as={NextLink}
            >
              Add Payment Method
            </DropdownItem>
            <DropdownItem
              key="list_payment_methods"
              description="List payment methods attached to a customer."
              href="/get-payment-methods"
              as={NextLink}
            >
              List Payment Methods
            </DropdownItem>
            <DropdownItem
              key="delete_payment_methods"
              description="Delete a payment method."
              href="/delete-payment-methods"
              // startContent={icons.flash}
            >
              Delete Payment Methods
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <DeleteClient clientId={clientId} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderContent;
