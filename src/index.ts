import config from "config";
import express from "express";
import dataBaseConnection from "../config/database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);

const port = config.get<number>("port");

app.listen(port, async () => {
  await dataBaseConnection();
  console.log(`🚀 App is running at ${port}`);
});
