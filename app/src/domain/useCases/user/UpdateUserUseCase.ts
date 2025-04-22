import { injectable } from "tsyringe";
import { UserRepository } from "../../repositories/UserRepository";
import { UserModel } from "../../models/User";
@injectable()
export class UpdateUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: UserModel): Promise<UserModel> {
    return this.userRepository.updateUser(user);
  }
}
