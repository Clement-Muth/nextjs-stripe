import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from "@nextui-org/react";
import NextLink from "next/link";
import ChevronDown from "~/components/Icons/chevronDown";

const HeaderMenu = () => {
  return (
    <>
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              endContent={<ChevronDown fill="currentColor" size={16} />}
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
    </>
  );
};

export default HeaderMenu;
