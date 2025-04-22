import { injectable } from "tsyringe";
import { UserModel } from "../../../domain/models/User";
import { UserRepositoryExceptions } from "../../../domain/errors/User/UserRepositoryExceptions";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../config/jwt";
import prisma from "../../entry-points/utils/prisma";
import { UserNotExists } from "../../../domain/errors/User/UserNotExists";
import { InvalidPassword } from "../../../domain/errors/User/InvalidPassword";
import { UserAlreadyExists } from "../../../domain/errors/User/UserAlreadyExists";
import { UserExceptions } from "../../../domain/errors/User/UserExceptions";
@injectable()
export class UserImplementation implements UserRepository {
  constructor() {}
  async loginUser(user: UserModel): Promise<{ token: string }> {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.getEmail() },
      });
      if (!existingUser) {
        throw new UserNotExists();
      }

      const isPasswordValid = await bcrypt.compare(
        user.getPassword(),
        existingUser.password
      );

      if (!isPasswordValid) {
        throw new InvalidPassword();
      }

      const token = generateToken({
        email: existingUser.email,
        name: existingUser.name,
        id: existingUser.id,
      });

      return { token };
    } catch (error) {
      if (error instanceof UserExceptions) {
        throw error;
      } else {
        throw new UserRepositoryExceptions();
      }
    }
  }
  async registerUser(
    user: UserModel
  ): Promise<{ user: UserModel; token: string }> {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.getEmail() },
      });
      console.log(existingUser);
      if (existingUser) {
        throw new UserAlreadyExists();
      }
      const hashedPassword = await bcrypt.hash(user.getPassword(), 10);

      const newUser = await prisma.user.create({
        data: {
          email: user.getEmail(),
          name: user.getName()!,
          password: hashedPassword,
        },
      });

      const token = generateToken({
        email: newUser.email,
        name: newUser.name,
        id: newUser.id,
      });

      return { user, token };
    } catch (error) {
      if (error instanceof UserExceptions) {
        throw error;
      } else {
        throw new UserRepositoryExceptions();
      }
    }
  }
  async getUsers(): Promise<UserModel[]> {
    try {
      const users = await prisma.user.findMany();
      return users.map(
        (user) => new UserModel(user.email, user.password, user.name, user.id)
      );
    } catch (error) {
      if (error instanceof UserExceptions) {
        throw error;
      } else {
        throw new UserRepositoryExceptions();
      }
    }
  }
  async updateUser(user: UserModel): Promise<UserModel> {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { id: Number(user.getId()) },
      });
      if (!existingUser) {
        throw new UserNotExists();
      }

      const dataToUpdate: {
        name?: string;
        password?: string;
      } = {};

      if (user.getName()) {
        dataToUpdate.name = user.getName();
      }

      if (user.getPassword()) {
        dataToUpdate.password = await bcrypt.hash(user.getPassword(), 10);
      }

      const updatedUser = await prisma.user.update({
        where: { id: Number(user.getId()) },
        data: dataToUpdate,
      });

      return new UserModel(
        updatedUser.email,
        updatedUser.password,
        updatedUser.name,
        updatedUser.id
      );
    } catch (error) {
      if (error instanceof UserExceptions) {
        throw error;
      } else {
        throw new UserRepositoryExceptions();
      }
    }
  }
  async deleteUser(id: number): Promise<boolean> {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!existingUser) {
        throw new UserNotExists();
      }

      await prisma.user.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      if (error instanceof UserExceptions) {
        throw error;
      } else {
        throw new UserRepositoryExceptions();
      }
    }
  }
}
