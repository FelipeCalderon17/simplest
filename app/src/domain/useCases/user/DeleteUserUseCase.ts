import { injectable } from "tsyringe";
import { UserRepository } from "../../repositories/UserRepository";
@injectable()
export class DeleteUserUseCase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number): Promise<boolean> {
    return this.userRepository.deleteUser(id);
  }
}
