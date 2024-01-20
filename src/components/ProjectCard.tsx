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
    <p className="py-[2px] badge badge-outline text-bg1 font-bold px-1 rounded-md w-fit text-xs bg-brand1">
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
    <div className="w-80 card bg-base-100 rounded-t-lg shadow-xl">
      <div className="relative">
        <img
          src={imgSrc}
          className="w-full h-56 rounded-t-lg bg-white object-cover"
        />
        <div className="absolute inset-0 h-auto bg-gradient-to-t from-black to-transparent opacity-30" />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h1 className="card-title">{title}</h1>
          <p className="py-2 font-IBM text-sm">{children}</p>
          <div className="card-actions flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <Tag skillName={tag} key={index} />
            ))}
          </div>
        </div>

        <div className="pt-4 flex gap-4 justify-end">
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
