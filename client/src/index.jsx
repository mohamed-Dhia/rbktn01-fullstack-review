import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [1]
    };
  }

  search(term) {
    console.log(`${term} was searched`);
    // axios
    //   .get(`https://api.github.com/users/${term}/repos`)
    //   .then(res => {
    //     this.state.repos = res.data;
    //     console.log("done", this);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    axios.post("http://127.0.0.1:1128/repos", { userName: term });
    //   .then(res => {
    //   console.log("done", this);
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
