import express from "express";
const app = express();
// const path = require("path");
const PORT = process.env.port || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

app.listen(PORT);
console.log("Server running on port " + PORT);
