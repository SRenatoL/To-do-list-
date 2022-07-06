const express = require("express");
const date = new Date

let day = date.getDate()
let mouth = date.getMonth()
let year = date.getFullYear()

const app = express();

app.use(express.json());

const log = (req, res, next) => {
    console.log(req.body)
    console.log(`Date: ${day}/${(mouth + 1)}/${year}`)
    next()
  }

app.use(log)

app.get("/", (req, res) => {
  res.send("<h1>My To do list :)</h1>");
});

app.listen(3000, () => {
  console.log("Server has been started");
});

app.get("/json", (req, res) => {
  console.log(req.body);
  res.json({ title: "Task X", done: true });
});


