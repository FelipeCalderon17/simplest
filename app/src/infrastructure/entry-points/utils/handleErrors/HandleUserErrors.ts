import { Response } from "express";
import { StatusCodes } from "./statusCodes/StatusCodes";
import { UserExceptions } from "../../../../domain/errors/User/UserExceptions";
import { InvalidPassword } from "../../../../domain/errors/User/InvalidPassword";
import { UserNotExists } from "../../../../domain/errors/User/UserNotExists";
import { UserAlreadyExists } from "../../../../domain/errors/User/UserAlreadyExists";

export class HandleUserError {
  static readonly handleError = (error: UserExceptions, res: Response) => {
    if (
      error instanceof InvalidPassword ||
      error instanceof UserNotExists ||
      error instanceof UserAlreadyExists
    ) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    } else {
      res.status(StatusCodes.INTERNAL_SERVER).json({ message: error.message });
    }
  };
}
