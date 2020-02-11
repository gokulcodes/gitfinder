import React from "react";

export default class Search extends React.Component {
  state = {
    text: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="search"
          value={this.state.text}
          onChange={this.onChange}
        />
        <button type="submit" className="btn btn-dark btn-block">
          Search
        </button>
        <br />
        {this.props.showClear && (
          <button
            type="submit"
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            clear
          </button>
        )}
      </form>
    );
  }
}
