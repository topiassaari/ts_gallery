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
    return props.variant;
  };
  return (
    <button
      onClick={props.onClick}
      className={props.variant}
      id="button"
      disabled={props.disabled}
    >
      {title()}
    </button>
  );
};
export default Button;
