"use client";

import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NoCards = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card>
      <CardHeader className="flex justify-center">
        <p>No card added</p>
      </CardHeader>
      <CardFooter>
        <Button
          color="primary"
          size="lg"
          onClick={() => {
            setIsLoading(true);
            push("/add-payment-methods");
          }}
          isLoading={isLoading}
        >
          Add a new payment method
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NoCards;
