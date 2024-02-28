import { Link } from "@nextui-org/react";
import AddPaymentMethodForm from "~/app/(stripe)/add-payment-methods/views/Form";
import codeAddPaymentMethod from "~/app/(stripe)/add-payment-methods/views/code";
import Tabs from "~/components/Tabs/Tabs";

export interface AddPaymentMethodsProps {
  clientId: string;
}

const AddPaymentMethods = ({ clientId }: AddPaymentMethodsProps) => {
  return (
    <section>
      <h2 id="usage" data-id="usage" data-level={1} data-name="Usage" className="mb-4">
        <Link href="#usage" className="text-2xl font-semibold">
          Usage
        </Link>
      </h2>
      <Tabs code={codeAddPaymentMethod}>
        <AddPaymentMethodForm clientId={clientId} />
      </Tabs>
    </section>
  );
};

export default AddPaymentMethods;
