import { Button, Divider, Link } from "@nextui-org/react";
import { cookies } from "next/headers";
import AddPaymentMethods from "~/app/(stripe)/add-payment-methods/views";
import getClient from "~/app/api/getClient";
import ElementsProvider from "~/libraries/stripe/ElementsProvider";

const AddPaymentMethodPage = async () => {
  const clientId = await getClient(cookies().get("clientId")?.value);

  return (
    <>
      <h1 className="font-bold text-4xl">Add your payment method</h1>
      <p>Create a payment method to a customer.</p>
      <div className="flex gap-4">
        <Button
          startContent={
            <svg
              height={20}
              viewBox="0 0 24 24"
              width={20}
              aria-hidden="true"
              focusable="false"
              tabIndex={-1}
            >
              <title>Github</title>
              <path
                clip-rule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          }
          size="sm"
          radius="sm"
          as={Link}
          href="https://github.com/Clement-Muth/nextjs-stripe/blob/master/src/app/api/attachPaymentMethod.ts"
          isExternal
        >
          Source
        </Button>
        <Button
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              viewBox="0 0 28.87 28.87"
              id="stripe"
            >
              <title>Stripe</title>
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <rect width="28.87" height="28.87" fill="#6772e5" rx="6.48" ry="6.48" />
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M13.3 11.2c0-.69.57-1 1.49-1a9.84 9.84 0 0 1 4.37 1.13V7.24a11.6 11.6 0 0 0-4.36-.8c-3.56 0-5.94 1.86-5.94 5 0 4.86 6.68 4.07 6.68 6.17 0 .81-.71 1.07-1.68 1.07A11.06 11.06 0 0 1 9 17.25v4.19a12.19 12.19 0 0 0 4.8 1c3.65 0 6.17-1.8 6.17-5 .03-5.21-6.67-4.27-6.67-6.24z"
                  />
                </g>
              </g>
            </svg>
          }
          size="sm"
          radius="sm"
          as={Link}
          href="https://docs.stripe.com/api/payment_methods/create"
          isExternal
        >
          Docs
        </Button>
      </div>
      <Divider />
      <ElementsProvider>
        <AddPaymentMethods clientId={clientId.id} />
      </ElementsProvider>
    </>
  );
};

export default AddPaymentMethodPage;
