import PaymentMethods from "~/app/(stripe)/get-payment-methods/views/PaymentMethods";
import PaymentMethod from "~/types/stripe/PaymentMethod";
import codeGetPaymentMethods from "~/app/(stripe)/get-payment-methods/views/code";
import Tabs from "~/components/Tabs/Tabs";

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
