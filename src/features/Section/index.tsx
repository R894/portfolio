import React from "react";
import HeadImage from "../../assets/icons/section-head.png";
import Header from "../Header";
import Footer from "../Footer";

interface SectionProps {
  id: string;
  title?: string;
  headImage?: boolean;
  altStyle?: boolean;
  children?: React.ReactNode;
  header?: boolean;
  footer?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  headImage,
  altStyle,
  header,
  children,
  footer,
}) => {
  return (
    <>
      <div
        id={id}
        className={`flex w-full px-6 flex-col flex-wrap gap-4 ${header || footer? "justify-between ": "justify-center "} items-center min-h-screen ${altStyle ? "bg-base-200" : ""}`}
      >
        {header && <Header />}
        {headImage && <img className="pb-8 pt-4 w-8 h-auto" src={HeadImage} />}

        {title && (
          <div className="relative m-4">
            <div className="text-6xl text-primary pb-4 border-b-2 border-primary">
              {title}
              <span className="absolute h-4 w-4 rounded-full bg-primary -bottom-2 -right-1"></span>
              <span className="absolute h-4 w-4 rounded-full bg-primary -bottom-2 -left-1"></span>
            </div>
          </div>
        )}
        {children}
        {footer && <Footer/>}
      </div>
    </>
  );
};
export default Section;
