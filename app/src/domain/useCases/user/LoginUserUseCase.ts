import { injectable } from "tsyringe";
import { UserRepository } from "../../repositories/UserRepository";
import { UserModel } from "../../models/User";
@injectable()
export class LoginUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: UserModel): Promise<{ token: string }> {
    return this.userRepository.loginUser(user);
  }
}
