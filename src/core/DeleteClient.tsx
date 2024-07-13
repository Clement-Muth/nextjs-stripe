"use client";

import { Button } from "@nextui-org/react";
import deleteClient from "~/app/api/deleteClient";

export interface DeleteClientProps {
  clientId?: string;
  fullWidth?: boolean;
}

const DeleteClient = ({ clientId, fullWidth }: DeleteClientProps) => {
  return (
    <Button
      color={!clientId ? "default" : "primary"}
      size="md"
      disabled={!clientId}
      isDisabled={!clientId}
      onClick={() => {
        clientId && deleteClient(clientId);
      }}
      fullWidth={fullWidth}
    >
      Delete Client
    </Button>
  );
};

export default DeleteClient;
