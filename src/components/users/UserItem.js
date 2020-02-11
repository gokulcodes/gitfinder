import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="profile"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h1>{login}</h1>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        Move
      </Link>
    </div>
  );
}
UserItem.propTypes = {
  users: PropTypes.object.isRequired
};
