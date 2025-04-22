import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../config/jwt";
import { StatusCodes } from "../entry-points/utils/handleErrors/statusCodes/StatusCodes";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "No token provided" });
    return;
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    res
      .status(StatusCodes.RESTRICTED_ACCESS)
      .json({ message: "Invalid token or expired" });
    return;
  }

  next();
}
