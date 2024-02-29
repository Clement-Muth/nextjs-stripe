"use client";

import { Input, Link, Select, SelectItem, Spacer } from "@nextui-org/react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import countries from "~/app/stripe-payment/payment-methods/create/views/Form/countries";
import newPaymentMethod from "~/app/stripe-payment/payment-methods/create/views/Form/newPaymentMethod";
import Form from "~/components/Form/Form";

interface AddPaymentMethodFormProps {
  clientId: string;
}

const AddPaymentMethodForm = ({ clientId }: AddPaymentMethodFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [zipCode, setZipCode] = useState<undefined | string>(undefined);
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [country, setCountry] = useState<any>(new Set([]));
  const [email, setEmail] = useState<undefined | string>(undefined);
  const [fullname, setFullname] = useState<undefined | string>(undefined);
  const [isPaymentMethodAdded, setIsPaymentMethodAdded] = useState<boolean>(false);
  const elements = useElements();
  const stripe = useStripe();
  const { push } = useRouter();

  const isInvalid = useMemo(() => {
    if (zipCode === undefined) return false;

    return zipCode.match(/^\d{5}$/) ? false : true;
  }, [zipCode]);

  return (
    <Form
      data-form-type="payment"
      onSubmit={(e) =>
        startTransition(async () => {
          e.preventDefault();
          if (!elements || !stripe) return;

          const cardElement = elements.getElement(CardNumberElement)!;

          const createNewPaymentMethod = new newPaymentMethod(
            clientId,
            (country as { currentKey: string }).currentKey,
            zipCode!,
            email!,
            fullname!
          );
          if ((await createNewPaymentMethod.addNewPaymentMethod(stripe, cardElement)).success)
            setIsPaymentMethodAdded(true);
        })
      }
      isLoading={isPending}
      onClick={() => isPaymentMethodAdded && push("/get-payment-methods")}
      submitted={isPaymentMethodAdded}
      buttonTitle={isPaymentMethodAdded ? "See my payment methods" : "Add payment method"}
    >
      <div className="flex">
        <Input
          label="Email"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          errorMessage={isInvalid && "Please enter a valid email"}
          onValueChange={setEmail}
          data-form-type="email"
          type="email"
          isRequired
        />
        <Spacer x={4} />
        <Input
          label="Full name"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          onValueChange={setFullname}
          data-form-type="fullname"
          isRequired
        />
      </div>
      <CardNumberElement id="card-number-element" options={{ showIcon: true }} />
      <div className="flex">
        <CardExpiryElement id="card-number-element" />
        <Spacer x={4} />
        <CardCvcElement id="card-number-element" />
      </div>
      <Input
        placeholder="92084"
        label="Zip Code"
        maxLength={5}
        minLength={5}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "default"}
        errorMessage={isInvalid && "Please enter a zip code"}
        onValueChange={setZipCode}
        isRequired
      />
      <Select
        label="Country"
        selectedKeys={country}
        onSelectionChange={setCountry}
        autoComplete="false"
        isRequired
      >
        {countries.map((country) => (
          <SelectItem key={country.value} value={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </Select>
    </Form>
  );
};

export default AddPaymentMethodForm;
