//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 3002; 

app.use(bodyParser.urlencoded({extended:true}));


app.get('/bmicalculator', (req, res)=> {
  res.sendFile(__dirname+"/index.html");
});

app.post('/bmicalculator',(req,res)=> {

  var num1 = Number(req.body.weights);
  var num2 = Number(req.body.heights);

  var result = num1 / num2;

  res.send("the soln in "+result);
});

app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}`);
});