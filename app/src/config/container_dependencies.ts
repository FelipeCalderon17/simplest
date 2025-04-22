import "reflect-metadata";
import { container } from "tsyringe";
import { UserRepository } from "../domain/repositories/UserRepository";
import { UserImplementation } from "../infrastructure/adapters/user/UserImplementation";
import { LoginUserUseCase } from "../domain/useCases/user/LoginUserUseCase";
import { RegisterUserUseCase } from "../domain/useCases/user/RegisterUserUseCase";
import { GetUsersUseCase } from "../domain/useCases/user/GetUsersUseCase";
import { UpdateUserUseCase } from "../domain/useCases/user/UpdateUserUseCase";
import { DeleteUserUseCase } from "../domain/useCases/user/DeleteUserUseCase";

container.register<UserRepository>("UserRepository", {
  useClass: UserImplementation,
});
container.register<LoginUserUseCase>("LoginUserUseCase", {
  useFactory: (c) =>
    new LoginUserUseCase(c.resolve<UserRepository>("UserRepository")),
});
container.register<RegisterUserUseCase>("RegisterUserUseCase", {
  useFactory: (c) =>
    new RegisterUserUseCase(c.resolve<UserRepository>("UserRepository")),
});
container.register<GetUsersUseCase>("GetUsersUseCase", {
  useFactory: (c) =>
    new GetUsersUseCase(c.resolve<UserRepository>("UserRepository")),
});
container.register<UpdateUserUseCase>("UpdateUserUseCase", {
  useFactory: (c) =>
    new UpdateUserUseCase(c.resolve<UserRepository>("UserRepository")),
});
container.register<DeleteUserUseCase>("DeleteUserUseCase", {
  useFactory: (c) =>
    new DeleteUserUseCase(c.resolve<UserRepository>("UserRepository")),
});
