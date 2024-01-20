import Section from "../features/Section";
import ComputerImage from "../assets/images/computer.png";

const About = () => {
  return (
    <Section id="about" altStyle={true}>
      <div className="flex gap-32 flex-wrap justify-center py-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl w-fit border-2 border-primary text-primary rounded-xl px-4 py-2">
            About me
          </h1>
          <div className="flex flex-col bg-base-100 max-w-3xl p-4 rounded-3xl text-base gap-4 shadow-xl">
            <h1 className="text-primary text-3xl">Hello!</h1>
            <p>
              I specialize in crafting end-to-end web applications.
              From designing user-friendly interfaces to optimizing database
              performance, I embrace the full spectrum of technologies to create
              engaging and efficient software.
            </p>
            <p>
              My passion for quality extends beyond development, I am equally
              adept at ensuring the reliability and functionality of software
              through QA testing.
            </p>
          </div>
        </div>
        <img className="max-w-sm hidden lg:block" src={ComputerImage} />
      </div>
    </Section>
  );
};
export default About;
