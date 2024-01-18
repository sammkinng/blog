import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold36Purple900: "font-inter font-semibold",
  txtInterRegular14Bluegray500: "font-inter font-normal",
  txtInterSemiBold14Gray900: "font-inter font-semibold",
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterSemiBold16Bluegray500: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold16WhiteA700: "font-inter font-semibold",
  txtInterSemiBold16Deeppurple500: "font-inter font-semibold",
  txtInterSemiBold16Deeppurple400: "font-inter font-semibold",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterSemiBold14Bluegray800: "font-inter font-semibold",
  txtInterRegular16Bluegray300: "font-inter font-normal",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold14Deeppurple500: "font-inter font-semibold",
  txtInterMediumItalic24: "font-inter font-medium italic",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold14Bluegray300: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterRegular20Bluegray500: "font-inter font-normal",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterSemiBold48Gray900: "font-inter font-semibold",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
