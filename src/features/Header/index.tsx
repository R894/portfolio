import Button from "../../components/Button";

const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="lg:px-32 py-4 w-full">
      <div className="items-center flex text-2xl justify-between py-2 w-full flex-wrap">
        <div className="flex font-bold gap-2">
          <h1 className="text-brand1">{"< / >"}</h1>
          <h1>
            <a href="">Kamil</a>
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <p className="cursor-pointer" onClick={handleClickScroll}>
            Projects
          </p>
          <p>
            <Button style="secondary">Download CV</Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
