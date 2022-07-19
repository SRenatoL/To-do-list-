const express = require("express");
const path = require('path');

const checkListRouter = require('./src/routes/checklist');
const roootRouter = require('./src/routes/index');
const methodOverride = require('method-override')

require('./config/database');

const app = express();
app.use(express.json()); //express.json sempre em cima :D
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public'))); //abilitando o uso de estaticos

app.set('views', path.join(__dirname, 'src/views')); //diz ao app onde as views vão ficar
//join: junta 2 rotas. dir name e a pasta atual
app.set('view engine', 'ejs')

app.use('/',roootRouter);
app.use('/checklists',checkListRouter);

app.listen(3000, () => {
  console.log("Server has been started");
});



