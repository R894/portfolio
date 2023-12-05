import React from "react";
import Button from "./Button";

const SkillListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="bg-brand1 text-bg2 px-2 py-1 rounded-xl">{children}</li>
  );
};

const CVCard = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-xs h-96 gap-4 bg-transparent shadow-t-sm shadow-brand1 border-2 p-8 rounded-tl-[100px] rounded-br-[100px]">
      <h1 className="text-2xl">Kamil Khalaileh</h1>
      <ul className="gap-5 text-sm">
        <li>kamil.khalaileh@gmail.com</li>
        <li>Israel</li>
        <li>Fulltime / Freelancer</li>
        <li>Website.com</li>
      </ul>
      <ul className="flex flex-wrap justify-center gap-4 text-sm">
        <SkillListItem>React</SkillListItem>
        <SkillListItem>Javascript</SkillListItem>
        <SkillListItem>Typescript</SkillListItem>
        <SkillListItem>Go (Golang)</SkillListItem>
        <SkillListItem>Node.js</SkillListItem>
      </ul>
      <Button style="secondary">Download CV</Button>
    </div>
  );
};
export default CVCard;
