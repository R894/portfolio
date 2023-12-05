import Button from "../components/Button";
import Section from "../features/Section";
import ArrowDown from "../assets/icons/arrow-down.png";

const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="home" header={true}>
      <div className="flex w-full h-full justify-around flex-wrap gap-4">
        <div className="text-xl flex flex-col gap-3 max-w-xl">
          <p className="font-IBM">Hi, my name is</p>
          <p className="text-5xl text-brand1 font-medium">Kamil Khalaileh.</p>
          <p className="text-5xl">I build things for the web.</p>
          <p className="text-base py-8 font-IBM">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </p>
          <div className="w-fit">
            <Button
              style="tertiary"
              onClick={() => {
                handleClickScroll();
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
        {/* <div className="bg-bg2 max-w-md hidden w-full md:flex justify-center items-center">
          Image here
        </div> */}
      </div>
      <img className="h-auto w-10 pb-12" src={ArrowDown} />
    </Section>
  );
};
export default Home;
