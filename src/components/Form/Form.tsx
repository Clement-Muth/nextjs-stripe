import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import { FormEventHandler, ReactNode } from "react";

export interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onClick?: () => void;
  isLoading?: boolean;
  submitted?: boolean;
  buttonTitle?: string;
  children: ReactNode;
}

const Form = ({ onSubmit, children, isLoading, submitted, onClick, buttonTitle, ...props }: FormProps) => {
  return (
    <Card className="w-full max-w-lg">
      <form data-form-type="payment" onSubmit={onSubmit} {...props}>
        <CardBody className="p-6 gap-y-4">
          {children}
          <Divider />
          <Button
            type="submit"
            variant="solid"
            size="lg"
            onClick={onClick}
            color={submitted ? "success" : "primary"}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {buttonTitle}
          </Button>
        </CardBody>
      </form>
    </Card>
  );
};

export default Form;
