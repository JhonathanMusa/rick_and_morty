import express from "express";
const app = express();
// const path = require("path");


app.use(require("./routes/index"));

app.listen(process.env.port || 8000);
console.log("Server running on port 8000");
