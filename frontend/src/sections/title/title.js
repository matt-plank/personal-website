import { SiGithub, SiLinkedin } from "react-icons/si";
import "./title.css";

const Title = () => {
  return (
    <div className="section title">
      <div className="content">
        <h1>Matt Plank</h1>
        <h2>Software Engineer & Data Scientist</h2>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/matt-plank-856668199/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>

          <a
            href="https://www.github.com/matt-plank"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;
