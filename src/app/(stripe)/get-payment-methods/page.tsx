import getPaymentMethods from "~/app/api/getPaymentMethods";
import getClient from "~/app/api/getClient";
import { cookies } from "next/headers";
import GetPaymentMethods from "~/app/(stripe)/get-payment-methods/views";

const AddPaymentMethodPage = async () => {
  const clientId = await getClient(cookies().get("clientId")?.value);
  const paymentMethods = await getPaymentMethods(clientId.id);

  return (
    <>
      <h1 className="font-bold text-3xl">My payment methods</h1>
      <GetPaymentMethods paymentMethods={paymentMethods} />
    </>
  );
};

export default AddPaymentMethodPage;
