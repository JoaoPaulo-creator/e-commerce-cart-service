require("dotenv").config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

export default {
  port: 3001,
  dbUri: `mongodb+srv://${DB_USER}:${DB_PASS}@ecommercecrudapi.cxzqozi.mongodb.net/?retryWrites=true&w=majority`,
};
