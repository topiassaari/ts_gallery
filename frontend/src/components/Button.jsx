import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const title = () => {
    if (props.variant === "add") {
      return "+";
    }
    if (props.variant === "close") {
      return "x";
    }
    if (props.variant === "previous") {
      return "prev";
    }
    return props.variant;
  };
  return (
    <button
      onClick={props.onClick}
      className={"button " + props.variant}
      disabled={props.disabled}
      label={props.variant}
    >
      {title()}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
