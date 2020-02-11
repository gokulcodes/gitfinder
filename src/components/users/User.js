import React, { Fragment } from "react";
import Spinner from "../navbar/spinner";
import { Link } from "react-router-dom";
import RepoItem from "./RepoItem";
export default class extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back
          </Link>
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                alt="profile"
                className="round-img"
                style={{ width: "200px" }}
              />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div>
              {bio && (
                <React.Fragment>
                  <h3>Bio: </h3>
                  {bio}
                </React.Fragment>
              )}
              <br />
              <a href={html_url} className="btn btn-dark my-1">
                Visit GitHub Page
              </a>
              <ul>
                {login && (
                  <li>
                    <h4>Username: </h4> {login}
                  </li>
                )}
                {company && (
                  <li>
                    <h4>Company: </h4> {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <h4>Website: </h4> {blog}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gist: {public_gists}</div>
          </div>
          <RepoItem repos={this.props.repos} />
        </Fragment>
      );
    }
  }
}
