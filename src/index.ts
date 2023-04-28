require("dotenv").config();
import dataBaseConnection from "./infra/config/database";

async function main() {
  return await dataBaseConnection();
}

main().then(async () => {
  const port = process.env.PORT;
  const app = (await import("./main/config/app")).default;
  app.listen(port, async () => {
    console.log(`🚀 App is running at ${port}`);
  });
});
