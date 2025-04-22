import { UserExceptions } from "./UserExceptions";

export class UserNotExists extends UserExceptions {
  constructor() {
    super("USER_NOT_EXISTS");
  }
}
