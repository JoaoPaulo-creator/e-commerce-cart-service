import express from "express";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use("/api/v1", routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 App is running at ${PORT}`);
});
