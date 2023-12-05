import Section from "../features/Section";
import ComputerImage from "../assets/images/computer.png";

const About = () => {
  return (
    <Section id="about" altStyle={true}>
      <div className="flex gap-32 flex-wrap justify-center py-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl w-fit bg-bg1 border-2 border-brand1 rounded-tl-3xl rounded-br-3xl px-4 py-2">
            About me
          </h1>
          <div className="font-IBM flex flex-col bg-bg1 max-w-3xl p-4 rounded-3xl text-base gap-4">
            <h1 className="text-brand1 text-3xl">Hello!</h1>
            <p>
              I'm not just a developer; I'm a problem solver. I love diving into
              challenges, finding innovative solutions, and delivering results
              that exceed expectations. My toolkit includes the latest
              technologies in front-end and back-end development, ensuring that
              the solutions I build are not only functional but also
              future-proof.
            </p>
          </div>
        </div>
        <img className="max-w-sm hidden lg:block" src={ComputerImage} />
      </div>
    </Section>
  );
};
export default About;
