import React from "react";

interface IconProps {
  src: string;
  background?: boolean;
}

const Icon: React.FC<IconProps> = ({ src, background }) => {
  return (
    <div className={`p-1 rounded-full ${background ? "bg-brand2" : ""}`}> 
      <img
        className={`h-auto w-5`}
        src={src}
      />
    </div>
  );
};
export default Icon;
