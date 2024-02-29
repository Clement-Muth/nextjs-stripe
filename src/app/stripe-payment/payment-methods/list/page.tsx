import getPaymentMethods from "~/app/api/getPaymentMethods";
import getClient from "~/app/api/getClient";
import { cookies } from "next/headers";
import GetPaymentMethods from "~/app/stripe-payment/payment-methods/list/views";
import PageContainer from "~/components/PageContainer/PageContainer";

const AddPaymentMethodPage = async () => {
  const clientId = await getClient(cookies().get("clientId")?.value);
  const paymentMethods = await getPaymentMethods(clientId.id);

  return (
    <PageContainer>
      <h1 className="font-bold text-3xl">My payment methods</h1>
      <GetPaymentMethods paymentMethods={paymentMethods} />
    </PageContainer>
  );
};

export default AddPaymentMethodPage;
