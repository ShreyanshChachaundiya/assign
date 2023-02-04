import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className={`${props.status} button-temp`}>{props.status}</button>
  );
};

export default Button;
