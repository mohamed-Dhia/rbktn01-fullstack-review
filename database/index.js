const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher", { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected hhhhhhhhhh");
});
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  fork: Boolean
});

let Repo = mongoose.model("Repo", repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // i dnt need it
};

module.exports.save = save;
module.exports.Repo = Repo;
