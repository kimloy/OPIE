const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


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

module.exports = app;
