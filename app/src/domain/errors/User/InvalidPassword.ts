import { UserExceptions } from "./UserExceptions";

export class InvalidPassword extends UserExceptions {
  constructor() {
    super("INVALID_PASSWORD");
  }
}
