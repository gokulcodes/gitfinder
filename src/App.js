import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import About from "../src/components/navbar/About";
import Alert from "../src/components/users/Alerts";
import User from "../src/components/users/User";
import Search from "../src/components/users/Search";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users?since=0");
  //   this.setState({ users: res.data, loading: false });
  // }
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: res.data, loading: false });
  };
  getUserRepos = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    this.setState({ repos: res.data });
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </>
                )}
              />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={this.state.user}
                    repos={this.state.repos}
                    loading={this.state.loading}
                  />
                )}
              />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
