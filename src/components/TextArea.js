import React from "react";
import { useState } from "react";

export default function TextArea(props) {
  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");

  };
  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text clered", "success");

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("enter");
  return (
    <>
      <div
        className={`container my-3 `}
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3 "
          id="myBox"
          style={{
            backgroundColor: props.mode === "dark" ? "#032242" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>

        <button className="btn btn-primary my-4 mx-2" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleClear}>
          Clear
        </button>

        <h1>Your Text summary</h1>

        <div className="container my-3">
          <span>
            {`${text.split(" ").length} words and ${text.length} characters`}{" "}
          </span>
        </div>
      </div>
    </>
  );
}
