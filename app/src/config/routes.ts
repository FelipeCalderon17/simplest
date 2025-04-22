import { Router } from "express";
import userRoutes from "./routes/UserRoutes";
export class SimplestRoutes {
  static get routes(): Router {
    const router = Router();
    router.use(userRoutes);
    return router;
  }
}
