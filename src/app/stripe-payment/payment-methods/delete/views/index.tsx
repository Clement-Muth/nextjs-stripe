import PaymentMethod from "~/types/stripe/PaymentMethod";
import Tabs from "~/components/Tabs/Tabs";
import Table from "~/app/stripe-payment/payment-methods/delete/views/Table";
import codeDeletePaymentMethods from "~/app/stripe-payment/payment-methods/delete/views/code";

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
