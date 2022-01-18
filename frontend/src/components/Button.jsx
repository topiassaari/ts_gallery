/* eslint-disable react/prop-types */
import React from "react";

const Button = (props) => {
  const title = () => {
    if (props.variant === "add") {
      return "+";
    }
    if (props.variant === "close") {
      return "x";
    }
    if (props.variant === "prev") {
      return "<";
    }
    if (props.variant === "next") {
      return ">";
    }
    return props.variant;
  };
  return (
    <button onClick={props.onClick} className={props.variant}>
      {title()}
    </button>
  );
};
export default Button;
