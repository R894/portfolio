import React from "react";
import HeadImage from "../../assets/icons/section-head.png";
import Header from "../Header";

interface SectionProps {
  id: string;
  title?: string;
  headImage?: boolean;
  altStyle?: boolean;
  children?: React.ReactNode;
  header?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  headImage,
  altStyle,
  header,
  children,
}) => {
  return (
    <>
      <div
        id={id}
        className={`flex w-full px-6 flex-col flex-wrap gap-4 ${header? "justify-between ": "justify-center "} items-center min-h-screen ${altStyle ? "bg-bg2" : ""}`}
      >
        {header && <Header />}
        {headImage && <img className="pb-8 pt-4 w-8 h-auto" src={HeadImage} />}

        {title && (
          <div className="relative m-4">
            <div className="text-6xl text-brand1 pb-4 border-b-2 border-brand1">
              {title}
              <span className="absolute h-4 w-4 rounded-full bg-brand1 -bottom-2 -right-1"></span>
              <span className="absolute h-4 w-4 rounded-full bg-brand1 -bottom-2 -left-1"></span>
            </div>
          </div>
        )}

        {children}
      </div>
    </>
  );
};
export default Section;
