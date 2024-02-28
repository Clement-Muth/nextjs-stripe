"use client";

import { Button } from "@nextui-org/react";
import deleteClient from "~/app/api/deleteClient";

export interface DeleteClientProps {
  clientId?: string;
}

const DeleteClient = ({ clientId }: DeleteClientProps) => {
  return (
    <Button
      color={!clientId ? "default" : "primary"}
      size="md"
      disabled={!clientId}
      isDisabled={!clientId}
      onClick={() => {
        clientId && deleteClient(clientId);
      }}
    >
      Delete Client
    </Button>
  );
};

export default DeleteClient;
