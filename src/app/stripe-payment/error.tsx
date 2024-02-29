"use client";

import { Input } from "@nextui-org/react";
import { useMemo, useState, useTransition } from "react";
import createNewClient from "~/app/api/createNewClient";
import Form from "~/components/Form/Form";
import PageContainer from "~/components/PageContainer/PageContainer";

const Error = ({ reset }: { reset: () => void }) => {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [fullname, setFullname] = useState<string | undefined>(undefined);

  const isInvalidEmail = useMemo(() => {
    if (email === undefined) return false;

    return email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,4})$/) ? false : true;
  }, [email]);

  return (
    <PageContainer>
      <h1 className="font-bold text-3xl">Create a customer first</h1>
      <Form
        data-form-type="payment"
        onSubmit={(e) =>
          startTransition(async () => {
            e.preventDefault();

            if (!email || !fullname) return;
            await createNewClient({ email, fullname });

            reset();
          })
        }
        isLoading={isPending}
        buttonTitle="Create a customer"
      >
        <Input
          placeholder="email@example.com"
          label="Email Address"
          type="email"
          maxLength={500}
          isInvalid={isInvalidEmail}
          color={isInvalidEmail ? "danger" : "default"}
          errorMessage={isInvalidEmail && "Please enter a valid email address"}
          onValueChange={setEmail}
          isRequired
        />
        <Input
          placeholder="Clément Muth"
          label="Full name"
          type="text"
          maxLength={100}
          onValueChange={setFullname}
          isRequired
        />
      </Form>
    </PageContainer>
  );
};

export default Error;
