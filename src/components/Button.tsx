import React from "react";

interface ButtonProps {
  style: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ style, onClick, children }) => {

  let btnStyle = "rounded-3xl py-3 px-8 text-xl ";
  switch (style) {
    case "primary":
      btnStyle += "bg-brand1 text-bg2";
      break;
    case "secondary":
      btnStyle += "bg-white text-bg2";
      break;
    case "tertiary":
      btnStyle += "bg-bg1 border border-brand1";
      break;
  }

  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
