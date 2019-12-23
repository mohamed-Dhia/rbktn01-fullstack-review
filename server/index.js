const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index");
const Repo = db.Repo;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var repo = new Repo(req.body);
  repo.save();
  res.send().status(201);
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  Repo.find().then(doc => {
    console.log(doc);
  });
  res.send("k");
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
