import AddPaymentMethodForm from "~/app/add-payment-methods/views/Form";
import ElementsProvider from "~/libraries/stripe/ElementsProvider";

const AddPaymentMethodPage = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-y-10">
      <h1 className="font-bold text-3xl">Add your payment method</h1>
      <ElementsProvider>
        <AddPaymentMethodForm clientId="cus_Pbe2kpjgnWl3pR" />
      </ElementsProvider>
    </main>
  );
};

export default AddPaymentMethodPage;
