import React from "react";

interface ButtonProps {
  style: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  style,
  onClick,
  children,
}) => {
  let btnStyle = "btn rounded-2xl text-xl ";
  switch (style) {
    case "primary":
      btnStyle += "btn-wide btn-primary";
      break;
    case "secondary":
      btnStyle += "btn-primary";
      break;
    case "tertiary":
      btnStyle += "btn-outline btn-primary";
      break;
  }

  return (
    <>
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
    
    </>
    
  );
};

export default Button;
