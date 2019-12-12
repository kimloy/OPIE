const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Form = require('./models/form');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // this will parse url encoded data. We do not need it.

mongoose.connect('mongodb+srv://kimloy:-rp9Y6a6X7u@L*8@cluster0-ury0y.mongodb.net/node-angular?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(()=>{
    console.log('Connected to database');
  })
  .catch(()=>{
    console.log('Connection failed')
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();                                           // This error popped up due to the fact that the server and client are operating on different domains.
});

app.post("/api/forms", (req,res,next) => {
  const form = new Form({
    Pid: req.body.Pid,
    dv: req.body.dv,
    gender: req.body.gender,
    age: req.body.age,
    FN: req.body.FN,
    LN: req.body.LN,
    speed1: req.body.speed1,
    speed2: req.body.speed2,
    speed3: req.body.speed3,
    time1: req.body.time1,
    time2: req.body.time2,
    time3: req.body.time3,
    assistD1: req.body.assistD1,
    assistD2: req.body.assistD2,
    assistD3: req.body.assistD3,
    Assistance: req.body.Assistance
  });
  form.save();
  res.status(201).json({
    message: 'form added successfully'
  });

});

app.get("/api/forms", (req, res, next) =>{
  const forms = [{
    patientId: '01',
    date: '12/10/2019',
    gender: 'Male',
    age: '27',
    FN: 'Paul',
    LN: 'Chang Fatt',
    speed1: "Max",
    speed2: "Max",
    speed3: "Max",
    time1: "1",
    time2: "1",
    time3: "1",
    assistD1: "no",
    assistD2: "no",
    assistD3: "no",
    Assistance: "no"
  }]
  res.status(200).json({
    message: 'Forms fetched successfully',
    forms: forms
  });
});

module.exports = app;


/*
const forms = new Form({
  patientId: req.body.patientId,
  date: req.body.dv,
  gender: req.body.gender,
  age: req.body.age,
  FN: req.body.FN,
  LN: req.body.LN,
  speed1: req.body.speed1,
  speed2: req.body.speed2,
  speed3: req.body.speed3,
  time1: req.body.time1,
  time2: req.body.time2,
  time3: req.body.time3,
  assistD1: req.body.assistD1,
  assistD2: req.body.assistD2,
  assistD3: req.body.assistD3,
  Assistance: req.body.Assistance
});*/
