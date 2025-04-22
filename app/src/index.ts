import "reflect-metadata";
import "./config/container_dependencies";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { SimplestRoutes } from "./config/routes";
import { requestLogger } from "./infrastructure/middlewares/RequestLogger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use(SimplestRoutes.routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
