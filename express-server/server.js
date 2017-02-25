var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var animals = [
    "puppy",
    "kitten",
    "ferocious bear",
    "penguin"
];

var ingredients = [
  {"id":1,"text":"ham"},
  {"id":2,"text":"cheese"},
  {"id":3,"text":"potatoes"},
  {"id":4,"text":"onions"}
];

app.get('/animals', function(req, res) {
    res.send(animals);
});

app.get('/ingredients', function(req, res) {
    res.send(ingredients);
});

app.post('/ingredients',function(req,res){
  var ingredient = req.body;
  console.log(req.body);
  ingredients.push(ingredient);
  res.status(200).send("Successfully posted ingredientttt");
});

app.listen(6060);
