const express = require("express");
const app = express();
// const path = require("path");
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index"));

app.listen(PORT);
console.log("Server running on port " + PORT);
