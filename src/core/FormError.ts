class FormError<R, F> {
  constructor(public readonly reason: R, public readonly name: F, public readonly message: string) {
    Object.freeze(this);
  }
}

export default FormError;
