import React from "react";
import LinkIcon from "./icons/LinkIcon";
import GithubIcon from "./icons/GithubIcon";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  children: React.ReactNode;
  tags: string[];
  gitLink: string;
  demoLink: string;
}

const Tag = ({ skillName }: { skillName: string }) => {
  return (
    <p className="py-[2px] text-bg1 font-bold px-1 rounded-md w-fit text-xs bg-brand1">
      {skillName}
    </p>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  title,
  children,
  tags,
  gitLink,
  demoLink,
}) => {
  return (
    <div className="w-80 bg-bg1 rounded-t-lg">
      <div className="relative">
        <img
          src={imgSrc}
          className="w-full h-56 rounded-t-lg bg-white object-cover"
        />
        <div className="absolute inset-0 h-auto bg-gradient-to-t from-black to-transparent opacity-30"/>
      </div>

      <div className="p-4 w-full">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="py-2 font-IBM text-sm">{children}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Tag skillName={tag} key={index} />
          ))}
        </div>
        <div className="text-white pt-4 flex justify-end gap-4">
          <a href={gitLink} target="_blank">
            <GithubIcon />
          </a>
          <a href={demoLink} target="_blank">
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
