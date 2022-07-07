const express = require("express");
const checkListRouter = require('./src/routes/checklist')

const app = express();
app.use(express.json()) //express.json sempre em cima :D

app.use('/checklists',checkListRouter);

app.listen(3000, () => {
  console.log("Server has been started");
});



