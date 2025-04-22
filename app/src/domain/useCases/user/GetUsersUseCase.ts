import { injectable } from "tsyringe";
import { UserRepository } from "../../repositories/UserRepository";
import { UserModel } from "../../models/User";
@injectable()
export class GetUsersUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<UserModel[]> {
    return this.userRepository.getUsers();
  }
}
