import { injectable } from "tsyringe";
import { UserRepository } from "../../repositories/UserRepository";
import { UserModel } from "../../models/User";
@injectable()
export class RegisterUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: UserModel): Promise<{ user: UserModel; token: string }> {
    return this.userRepository.registerUser(user);
  }
}
