const express = require("express")
const app = express()
const path = require("path")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"))

})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/about.html"))

})

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/contact-me.html"))

})

app.listen(process.env.port || 8000);
console.log("Server running on port 8000");

