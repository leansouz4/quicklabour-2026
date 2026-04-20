const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const databaseUrl = process.env.DATABASE_URL;
console.log(databaseUrl);
console.log("DB URL:", process.env.DATABASE_URL);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("QuickLabour API is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});