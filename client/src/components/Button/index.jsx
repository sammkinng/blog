import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[14px]" };
const variants = {
  fill: {
    gray_50: "bg-gray-50 text-deep_purple-500",
    light_green_50: "bg-light_green-50",
    blue_50: "bg-blue-50",
    gray_50_01: "bg-gray-50_01",
    white_A700: "bg-white-A700 shadow-bs",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_50",
    "light_green_50",
    "blue_50",
    "gray_50_01",
    "white_A700",
  ]),
};

export { Button };
