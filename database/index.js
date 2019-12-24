const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher", { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected hhhhhhhhhh");
});
let userSchema = mongoose.Schema({
  name: String,
  repos: Array
});
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  fork: Boolean
});
let Repo = mongoose.model("Repo", repoSchema);
let User = mongoose.model("User", userSchema);

let save = obj => {
  // TODO: Your code here00
  // This function should save a repo or repos to
  // the MongoDB
  var user = new User({
    name: obj.user,
    repos: obj.repo
  });
  user.save();
  console.log("done");
};

module.exports.save = save;
module.exports.Repo = Repo;
module.exports.User = User;
