type Billing = {
  city: string | null;
  country: string | null;
  line1: string | null;
  line2: string | null;
  state: string | null;
  zip: string | null;
};

export type Brand = "amex" | "diners" | "discover" | "eftpos_au" | "jcb" | "mastercard" | "unionpay" | "visa";

type Exp = {
  month: number;
  year: number;
};

class PaymentMethod {
  constructor(
    public readonly paymentMethodId: string,
    public readonly fingerprint: string,
    public readonly brand: Brand,
    public readonly last4: string,
    public readonly exp: Exp,
    public readonly billing: Billing | null,
    public readonly name: string | null
  ) {
    Object.freeze(this);
  }
}

export default PaymentMethod;
