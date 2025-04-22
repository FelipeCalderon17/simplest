export class DtoExceptions extends Error {
  constructor(public readonly message: string) {
    super(message);
  }
}
