const express=require("express");
const app=express();
const port =3000;
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const cors=require("cors")

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', studentRoutes);

app.listen(port,()=>console.log(`app is up and running at ${port}`))