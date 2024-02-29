import PaymentMethod from "~/types/stripe/PaymentMethod";
import Tabs from "~/components/Tabs/Tabs";
import PaymentMethods from "~/app/stripe-payment/payment-methods/list/views/PaymentMethods";
import codeGetPaymentMethods from "~/app/stripe-payment/payment-methods/list/views/code";

export interface GetPaymentMethodsProps {
  paymentMethods: PaymentMethod[] | null;
}

const GetPaymentMethods = ({ paymentMethods }: GetPaymentMethodsProps) => {
  return (
    <Tabs code={codeGetPaymentMethods}>
      <PaymentMethods paymentMethods={paymentMethods} />
    </Tabs>
  );
};

export default GetPaymentMethods;
