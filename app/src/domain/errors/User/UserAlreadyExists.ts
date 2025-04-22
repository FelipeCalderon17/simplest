import { UserExceptions } from "./UserExceptions";

export class UserAlreadyExists extends UserExceptions {
  constructor() {
    super("USER_ALREADY_EXISTS");
  }
}
