import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import Icon from "../../components/Icon";

const Footer = () => {
  return (
    <div className="w-full pt-8">
      <ul className="flex flex-col md:flex-row justify-between border-t py-4 px-32 w-full">
        <li>© 2023. All rights reserved.</li>
        <li className="flex gap-4">
          <a target="_blank" href="https://github.com/R894">
            <Icon src={GithubIcon} background={true} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kamil-khalaileh/"
          >
            <Icon src={LinkedinIcon} background={true} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
