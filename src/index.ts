require("dotenv").config();
import { MongoClient } from "mongodb";

const mongoURL: any = process.env.MONGO_URL;

MongoClient.connect(mongoURL)
  .then(() => console.log("✅ Connected to database"))
  .then(async () => {
    const port = process.env.PORT;
    const app = (await import("./main/config/app")).default;
    app.listen(port, async () => {
      console.log(`🚀 App is running at ${port}`);
    });
  });
