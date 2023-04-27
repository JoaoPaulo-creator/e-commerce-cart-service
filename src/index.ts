import config from "config";
import express from "express";
import dataBaseConnection from "../config/database";
import corsMiddleware from "./main/middlewares/cors/cors-setup";
import { routes } from "./router/routes";

const app = express();
const cors = corsMiddleware;

app.use(express.json());
app.use(cors);
app.use("/api/v1", routes);

const port = config.get<number>("port");

app.listen(port, async () => {
  await dataBaseConnection();
  console.log(`🚀 App is running at ${port}`);
});
