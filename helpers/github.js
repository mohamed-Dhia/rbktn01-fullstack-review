const request = require("request");
const axios = require("axios");
// const config = require("../config.js");

let getReposByUsername = userName => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  axios
    .get(options.url)
    .then(res => {
      var data = res;
      console.log("done");
    })
    .catch(function(error) {
      console.log(error);
    });
  // return data;
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      "User-Agent": "request",
      Authorization: `token ${config.TOKEN}`
    }
  };
};

module.exports.getReposByUsername = getReposByUsername;
