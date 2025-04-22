export class UserExceptions extends Error {
  constructor(public readonly message: string) {
    super(message);
  }
}
