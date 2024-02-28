import AddPaymentMethodForm from "~/app/(stripe)/add-payment-methods/views/Form";
import codeAddPaymentMethod from "~/app/(stripe)/add-payment-methods/views/code";
import Tabs from "~/components/Tabs/Tabs";

export interface AddPaymentMethodsProps {
  clientId: string;
}

const AddPaymentMethods = ({ clientId }: AddPaymentMethodsProps) => {
  return (
    <Tabs code={codeAddPaymentMethod}>
      <AddPaymentMethodForm clientId={clientId} />
    </Tabs>
  );
};

export default AddPaymentMethods;
