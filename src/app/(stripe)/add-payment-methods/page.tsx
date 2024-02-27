import { cookies } from "next/headers";
import AddPaymentMethodForm from "~/app/(stripe)/add-payment-methods/views/Form";
import getClient from "~/app/api/getClient";
import PageContainer from "~/components/PageContainer/PageContainer";
import ElementsProvider from "~/libraries/stripe/ElementsProvider";

const AddPaymentMethodPage = async () => {
  const clientId = await getClient(cookies().get("clientId")?.value);

  return (
    <PageContainer>
      <h1 className="font-bold text-3xl">Add your payment method</h1>
      <ElementsProvider>
        <AddPaymentMethodForm clientId={clientId.id} />
      </ElementsProvider>
    </PageContainer>
  );
};

export default AddPaymentMethodPage;
