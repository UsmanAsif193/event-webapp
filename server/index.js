const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router");
const connectToDB = require("./db/connect");

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

app.use(cors());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3001;
const dbURI = "mongodb://localhost:27017/events_DB";

(async () => {
  await connectToDB(dbURI);
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running at http://localhost:${port} 👌`);
  });
})();
