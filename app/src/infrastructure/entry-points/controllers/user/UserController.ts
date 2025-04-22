import { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { LoginUserUseCase } from "../../../../domain/useCases/user/LoginUserUseCase";
import { UserDto } from "./dto/UserDto";
import { HandleUserError } from "../../utils/handleErrors/HandleUserErrors";
import { StatusCodes } from "../../utils/handleErrors/statusCodes/StatusCodes";
import { RegisterUserUseCase } from "../../../../domain/useCases/user/RegisterUserUseCase";
import { GetUsersUseCase } from "../../../../domain/useCases/user/GetUsersUseCase";
import { UpdateUserUseCase } from "../../../../domain/useCases/user/UpdateUserUseCase";
import { DeleteUserUseCase } from "../../../../domain/useCases/user/DeleteUserUseCase";

@injectable()
export class UserController {
  constructor(
    @inject("LoginUserUseCase")
    private readonly loginUserUseCase: LoginUserUseCase,
    @inject("RegisterUserUseCase")
    private readonly registerUserUseCase: RegisterUserUseCase,
    @inject("GetUsersUseCase")
    private readonly getUsersUseCase: GetUsersUseCase,
    @inject("UpdateUserUseCase")
    private readonly updateUserUseCase: UpdateUserUseCase,
    @inject("DeleteUserUseCase")
    private readonly deleteUserUseCase: DeleteUserUseCase
  ) {}

  loginUser = async (req: Request, res: Response): Promise<void> => {
    await UserDto.login(req.body)
      .then((userDto) => {
        this.loginUserUseCase
          .execute(userDto?.transformToDomain())
          .then((data) =>
            res.json({
              message: "Usuario loggeado exitosamente",
              token: data.token,
            })
          )
          .catch((error) => HandleUserError.handleError(error, res));
      })
      .catch((error) => {
        const err = error as Error;
        res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
      });
  };
  registerUser = async (req: Request, res: Response): Promise<void> => {
    await UserDto.register(req.body)
      .then((userDto) => {
        this.registerUserUseCase
          .execute(userDto?.transformToDomain())
          .then((data) =>
            res.json({
              message: "Usuario registrado exitosamente",
              token: data.token,
              email: data.user.getEmail(),
            })
          )
          .catch((error) => HandleUserError.handleError(error, res));
      })
      .catch((error) => {
        const err = error as Error;
        res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
      });
  };
  getUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
      const users = await this.getUsersUseCase.execute();

      const usersDto = users.map((user) => ({
        name: user.getName(),
        email: user.getEmail(),
        id: user.getId(),
      }));

      res.json({
        users: usersDto,
      });
    } catch (error) {
      HandleUserError.handleError(error as Error, res);
    }
  };
  updateUser = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    if (!id) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "Missing user ID" });
      return;
    }
    await UserDto.update({ ...req.body, id })
      .then((userDto) => {
        this.updateUserUseCase
          .execute(userDto?.transformToDomain())
          .then((updatedUser) =>
            res.json({
              message: "Usuario actualizado exitosamente",
              user: {
                id: updatedUser.getId(),
                name: updatedUser.getName(),
                email: updatedUser.getEmail(),
              },
            })
          )
          .catch((error) => HandleUserError.handleError(error, res));
      })
      .catch((error) => {
        const err = error as Error;
        res.status(StatusCodes.BAD_REQUEST).json({ message: err.message });
      });
  };
  deleteUser = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    if (!id) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "Missing user ID" });
      return;
    }

    try {
      await this.deleteUserUseCase.execute(Number(id));
      res.json({
        message: "Usuario eliminado exitosamente",
      });
    } catch (error) {
      HandleUserError.handleError(error as Error, res);
    }
  };
}
