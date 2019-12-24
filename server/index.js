const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index");
const getReposByUsername = require("../helpers/github");
const Repo = db.Repo;
const save = db.save;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // var repo = new Repo(req.body);
  // repo.save();
  // res.send().status(201);

  res.send(getReposByUsername(req.body.userName));
});
app.post("/test", function(req, res) {
  save(req.body);
  res.send("done");
});
app.get("/test", function(req, res) {
  var docs = db.User.find({ name: "donatelosss" }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
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
