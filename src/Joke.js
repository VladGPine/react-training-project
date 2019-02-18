import React from "react";

import "./Joke.css";

function Joke(props) {
  return (
    <div className="joke">
      <p
        style={{ display: props.question ? "block" : "none" }}
        className="question"
      >
        Q: {props.question}
      </p>
      <p
        style={{ color: props.question ? "inherit" : "gray" }}
        className="punch-line"
      >
        A: {props.punchLine}
      </p>
    </div>
  );
}

export default Joke;
