const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/players", require("./api/players"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
