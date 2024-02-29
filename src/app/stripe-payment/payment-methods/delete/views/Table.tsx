"use client";

import Mastercard from "/public/cards/brands/mastercard.svg";
import AmericanExpress from "/public/cards/brands/american-express.svg";
import Visa from "/public/cards/brands/visa.svg";
import Discover from "/public/cards/brands/discover.svg";
import DinersClub from "/public/cards/brands/diners-club.svg";
import Jcb from "/public/cards/brands/jcb.svg";
import UnionPay from "/public/cards/brands/unionpay.svg";
import { useCallback } from "react";
import {
  Image,
  Table as TableNext,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  Card,
  CardBody,
  Button,
  CardFooter,
  Divider
} from "@nextui-org/react";
import NextImage from "next/image";
import PaymentMethod from "~/types/stripe/PaymentMethod";
import deletePaymentMethod from "~/app/api/deletePaymentMethod";
import { DeleteIcon } from "~/app/stripe-payment/payment-methods/delete/views/DeleteIcon";

export interface TableProps {
  paymentMethods: PaymentMethod[] | null;
}

const Table = ({ paymentMethods }: TableProps) => {
  const renderCell = useCallback((paymentMethod: PaymentMethod, columnKey: React.Key) => {
    switch (columnKey) {
      case "brand":
        return (
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
            width={25}
            height={25}
          />
        );
      case "last4":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">{paymentMethod.last4}</p>
          </div>
        );
      case "expires":
        return (
          <div className="flex flex-col">
            <span className="flex text-bold text-sm capitalize text-default-400">
              {paymentMethod.exp.month}/{paymentMethod.exp.year}
            </span>
          </div>
        );
      case "actions":
        return (
          <div className="flex flex-col">
            <Tooltip color="danger" content="Delete payment method" showArrow>
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => deletePaymentMethod({ paymentMethodId: paymentMethod.paymentMethodId })}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
    }
  }, []);

  return paymentMethods?.length ? (
    <TableNext aria-label="Example table with custom cells" className="max-w-xl min-w-[512px]">
      <TableHeader
        columns={[
          { name: "brand", uid: "value" },
          { name: "last4", uid: "value" },
          { name: "expires", uid: "value" },
          { name: "actions", uid: "actions" }
        ]}
      >
        {(column) => (
          <TableColumn key={column.name} align="end">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={paymentMethods as PaymentMethod[] | undefined}>
        {(paymentMethod) => (
          <TableRow key={`row-${paymentMethod.paymentMethodId}`}>
            {(columnKey) => <TableCell>{renderCell(paymentMethod, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </TableNext>
  ) : (
    <Card className="min-w-72 w-full">
      <CardBody className="flex justify-center items-center p-4">
        <p>No card added</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" color="primary" fullWidth>
          Add a payment method
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Table;
