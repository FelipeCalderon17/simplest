export class UserModel {
  constructor(
    private readonly email: string,
    private readonly password: string,
    private readonly name?: string,
    private readonly id?: number
  ) {}
  public getName() {
    return this.name;
  }
  public getEmail() {
    return this.email;
  }
  public getPassword() {
    return this.password;
  }
  public getId() {
    return this.id;
  }
}
