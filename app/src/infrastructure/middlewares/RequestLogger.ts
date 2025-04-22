import { Request, Response, NextFunction } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const start = Date.now();

  console.log(
    `[START] ${req.method} ${req.originalUrl} at ${new Date().toISOString()}`
  );

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[END] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} - Duration: ${duration}ms`
    );
  });

  next();
};
