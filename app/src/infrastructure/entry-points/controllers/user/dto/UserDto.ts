import { UserModel } from "../../../../../domain/models/User";
import { Validators } from "../../../utils/Validators";
import { DtoExceptions } from "./errors/DtoExceptions";

interface UserInput {
  name?: string;
  email?: string;
  password?: string;
  id?: number;
}
export class UserDto {
  constructor(
    public email: string,
    public password: string,
    public name?: string,
    public id?: number
  ) {}

  transformToDomain(): UserModel {
    return new UserModel(this.email, this.password, this.name, this.id ?? 0);
  }
  static async register(object: UserInput): Promise<UserDto> {
    this.validateName(object.name!);
    this.validateEmail(object.email!);
    this.validatePassword(object.password!);
    return new UserDto(object.email!, object.password!, object.name!);
  }

  static async login(object: UserInput): Promise<UserDto> {
    this.validateEmail(object.email!);
    this.validatePassword(object.password!);
    return new UserDto(object.email!, object.password!);
  }

  static async update(object: UserInput): Promise<UserDto> {
    if (object.name) {
      this.validateName(object.name);
    }
    if (object.password) {
      this.validatePassword(object.password!);
    }
    return new UserDto("", object.password ?? "", object.name ?? "", object.id);
  }

  private static validateName(name: string): void {
    if (!name) {
      throw new DtoExceptions("MISSING_NAME");
    }
    if (!Validators.nameValidator.test(name)) {
      throw new DtoExceptions("NAME_NOT_VALID");
    }
  }

  private static validateEmail(email: string): void {
    if (!email) {
      throw new DtoExceptions("MISSING_EMAIL");
    }
    if (!Validators.emailValidator.test(email)) {
      throw new DtoExceptions("EMAIL_NOT_VALID");
    }
  }

  private static validatePassword(password: string): void {
    if (!password) {
      throw new DtoExceptions("MISSING_PASSWORD");
    }
    if (!Validators.passwordValidator.test(password)) {
      throw new DtoExceptions("PASSWORD_NOT_VALID");
    }
  }
}
