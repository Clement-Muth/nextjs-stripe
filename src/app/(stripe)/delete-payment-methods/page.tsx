import { cookies } from "next/headers";
import ListPaymentMethods from "~/app/(stripe)/delete-payment-methods/views";
import getClient from "~/app/api/getClient";
import getPaymentMethods from "~/app/api/getPaymentMethods";

const DeletePaymentMethodPage = async () => {
  const clientId = await getClient(cookies().get("clientId")?.value);
  const paymentMethods = await getPaymentMethods(clientId.id);

  return (
    <>
      <h1 className="font-bold text-3xl">Delete a payment method</h1>
      <ListPaymentMethods paymentMethods={paymentMethods} />
    </>
  );
};

export default DeletePaymentMethodPage;
