import ProjectCard from "../components/ProjectCard";
import Section from "../features/Section";
import Portfolio from '../assets/images/portfolio.png'
import Nuntium from "../assets/images/nuntium.png"

const Projects = () => {
  return (
    <Section id="projects" title="Projects" altStyle={true}>
      <div className="flex gap-4 flex-wrap justify-center pb-4">
        <ProjectCard
          title="Nuntium"
          imgSrc={Nuntium}
          tags={["React", "Typescript", "Tailwindcss", "Go (Golang)"]}
          gitLink="https://github.com/R894/blog-frontend"
          demoLink="https://www.google.com/"
        >
          A full-stack blog website with user authentication
        </ProjectCard>

        <ProjectCard
          title="Portfolio"
          imgSrc={Portfolio}
          tags={["React", "Typescript", "Tailwindcss"]}
          gitLink="https://github.com/R894/portfolio"
          demoLink="https://www.google.com/"
        >
          Very long and interesting description
        </ProjectCard>
      </div>
    </Section>
  );
};
export default Projects;
