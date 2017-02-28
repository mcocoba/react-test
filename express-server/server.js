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

var subscribers = [
  {"id":1,"email":"ham@gmail.com","firstName":'Joe'}
];

app.get('/animals', function(req, res) {
    res.send(animals);
});

app.get('/subscribers', function(req, res) {
    res.send(ingredients);
});

app.post('/subscribers',function(req,res){
  var subscriber = req.body;
  subscriber.id = Math.floor(Date.now() / 1000) + req.body.email
  subscribers.push(subscriber);
  res.status(200).send("Successfully posted ingredientttt");
});

app.listen(6060);
