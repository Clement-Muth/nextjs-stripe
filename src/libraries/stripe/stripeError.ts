export enum StripeErrorCardCode {
  cardDeclined = "card_declined",
  expiredCard = "expired_card",
  incorrectCvc = "incorrect_cvc",
  processingError = "processing_error",
  incorrectNumber = "incorrect_number",
  alreadyExist = "already_exist",
  unknown = "unknown"
}

export type StripeErrorCardCodeValue =
  | "card_declined"
  | "expired_card"
  | "incorrect_cvc"
  | "processing_error"
  | "incorrect_number"
  | "unknown";

export enum StripeErrorCardDeclineCode {
  genericDecline = "generic_decline",
  insufficientFunds = "insufficient_funds",
  lostCard = "lost_card",
  stolenCard = "stolen_card",
  cardVelocityExceeded = "card_velocity_exceeded"
}

export type StripeErrorCardDeclineCodeValue =
  | "generic_decline"
  | "insufficient_funds"
  | "lost_card"
  | "stolen_card"
  | "card_velocity_exceeded";

export enum StripeErrorCode {
  resourceMissing = "resource_missing"
}

export type StripeErrorCodeValue = "resource_missing";

namespace StripeError {
  type RawError =
    | {
        code?: never;
        message: string;
        declineCode: StripeErrorCardDeclineCode;
      }
    | {
        code: StripeErrorCardCode | StripeErrorCode;
        message: string;
        declineCode?: never;
      };

  export class Error {
    readonly code;

    readonly message;

    readonly declineCode;

    constructor(public rowError: RawError) {
      this.code = rowError.code!;
      this.message = rowError.message;
      this.declineCode = rowError.declineCode!;

      Object.freeze(this);
    }
  }

  export class Errors {
    static readonly cardCode: typeof StripeErrorCardCode = StripeErrorCardCode;
    static readonly cardDeclineCode: typeof StripeErrorCardDeclineCode = StripeErrorCardDeclineCode;

    static readonly code: typeof StripeErrorCode = StripeErrorCode;
  }
}

export default StripeError;
