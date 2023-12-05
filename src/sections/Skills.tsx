import Section from "../features/Section";
import * as Icons from "../assets/icons/skills";

const SkillIcon = ({
  skillName,
  skillPath,
}: {
  skillName: string;
  skillPath: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 font-IBM">
      <img src={skillPath} className="w-32 h-32" />
      <p>{skillName}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <p className="font-IBM pb-12">
        I'm striving to never stop learning and improving
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 pb-16">
        <SkillIcon skillName="Typescript" skillPath={Icons.typescriptLogo} />
        <SkillIcon skillName="Javascript" skillPath={Icons.jsLogo} />
        <SkillIcon skillName="Docker" skillPath={Icons.dockerLogo} />
        <SkillIcon skillName="Git" skillPath={Icons.gitLogo} />
        <SkillIcon skillName="Go (Golang)" skillPath={Icons.goLogo} />
        <SkillIcon skillName="Express" skillPath={Icons.expressLogo} />
        <SkillIcon skillName="MongoDB" skillPath={Icons.mongodbLogo} />
        <SkillIcon skillName="Postgresql" skillPath={Icons.postgresLogo} />
        <SkillIcon skillName="React" skillPath={Icons.reactLogo} />
        <SkillIcon skillName="TailwindCSS" skillPath={Icons.tailwindLogo} />
      </div>
    </Section>
  );
};
export default Skills;
