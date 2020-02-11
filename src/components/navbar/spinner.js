import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <>
      <img
        src={spinner}
        alt="loader"
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
    </>
  );
}
