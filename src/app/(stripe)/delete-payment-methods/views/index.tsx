import PaymentMethod from "~/types/stripe/PaymentMethod";
import Table from "~/app/(stripe)/delete-payment-methods/views/Table";
import Tabs from "~/components/Tabs/Tabs";
import codeDeletePaymentMethods from "~/app/(stripe)/delete-payment-methods/views/code";

export interface ListPaymentMethodsProps {
  paymentMethods: PaymentMethod[] | null;
}

const ListPaymentMethods = ({ paymentMethods }: ListPaymentMethodsProps) => {
  return (
    <Tabs code={codeDeletePaymentMethods}>
      <Table paymentMethods={paymentMethods} />
    </Tabs>
  );
};

export default ListPaymentMethods;
