import { Card, CardBody, CardFooter, CardHeader, Image, ScrollShadow } from "@nextui-org/react";
import Mastercard from "/public/cards/brands/mastercard.svg";
import AmericanExpress from "/public/cards/brands/american-express.svg";
import Visa from "/public/cards/brands/visa.svg";
import Discover from "/public/cards/brands/discover.svg";
import DinersClub from "/public/cards/brands/diners-club.svg";
import Jcb from "/public/cards/brands/jcb.svg";
import UnionPay from "/public/cards/brands/unionpay.svg";
import NextImage from "next/image";
import PaymentMethod from "~/types/stripe/PaymentMethod";

export interface PaymentMethodsProps {
  paymentMethods: PaymentMethod[] | null;
}

const PaymentMethods = ({ paymentMethods }: PaymentMethodsProps) => {
  return (
    <ScrollShadow orientation="horizontal" className="flex gap-5 max-w-2xl p-5" hideScrollBar>
      {paymentMethods?.map((paymentMethod, i) => (
        <Card className="px-8 py-4 min-w-fit" key={paymentMethod.last4 + i}>
          <CardHeader>
            <p className="uppercase">{paymentMethod.brand}</p>
          </CardHeader>
          <CardBody>
            <p className="flex gap-7 text-xl">
              <span>••••</span> <span>••••</span> <span>••••</span> {paymentMethod.last4}
            </p>
          </CardBody>
          <CardFooter className="flex justify-between">
            <p>{paymentMethod.name}</p>
            <Image
              as={NextImage}
              src={
                (paymentMethod.brand === "amex"
                  ? AmericanExpress
                  : paymentMethod.brand === "mastercard"
                  ? Mastercard
                  : paymentMethod.brand === "visa"
                  ? Visa
                  : paymentMethod.brand === "discover"
                  ? Discover
                  : paymentMethod.brand === "diners"
                  ? DinersClub
                  : paymentMethod.brand === "jcb"
                  ? Jcb
                  : paymentMethod.brand === "unionpay"
                  ? UnionPay
                  : null
                )?.src
              }
              width={60}
              height={60}
            />
          </CardFooter>
        </Card>
      )) ?? <p>No card added</p>}
    </ScrollShadow>
  );
};

export default PaymentMethods;
