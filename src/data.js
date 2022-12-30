//icons - https://react-icons.github.io/react-icons/
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaGitAlt,
    FaGithubSquare,
    FaLink,
  } from "react-icons/fa";
  import { SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";
  
  import Logo from "./images/logo.svg";
  
  import HeroLight from "./images/MotoVixens_June_5_2022_Ridge-1009.jpg";
  import HeroDark from "./images/MotoVixens_June_5_2022_Ridge-1009.jpg";
  export { HeroLight as Light };
  export { HeroDark as Dark };
  
  export const githubUsername = "csandu123";
  
  export const Blog = <FaLink />;
  
  export const moreInfo =
    "Nice to meet you! My name is Cosmin Sandu and I am a web developer with a big background in sales. I enjoy anything that has a motor and wheels and anything that has a mouse and keyboard as well! Check out my resume and some of the projects I've been able to put together. Hope you enjoy my work :)";
  

  export const skillData = [
    {
      id: 1,
      skill: <FaHtml5 className="display-4" />,
      name: "HTML5",
    },
    {
      id: 2,
      skill: <FaCss3Alt className="display-4" />,
      name: "CSS3",
    },
    {
      id: 3,
      skill: <SiJavascript className="display-4" />,
      name: "JavaScript",
    },
    {
      id: 4,
      skill: <FaBootstrap className="display-4" />,
      name: "BootStrap",
    },
    {
      id: 5,
      skill: <FaReact className="display-4" />,
      name: "React",
    },
    {
      id: 6,
      skill: <SiStyledcomponents className="display-4" />,
      name: "Styled Components",
    },
    {
      id: 7,
      skill: <SiRedux className="display-4" />,
      name: "Redux",
    },
    {
      id: 8,
      skill: <FaGitAlt className="display-4" />,
      name: "Git",
    },
    {
      id: 9,
      skill: <FaGithubSquare className="display-4" />,
      name: "GitHub",
    },
  ];
  
  export const resume = "https://www.dropbox.com/s/8wyw2xsxy78nchx/Resume.pdf?dl=0";
  
  export const filteredProjects = ["GoodWeatherReport", "Workday-Planner", "Timed-Quiz", "Password-Generator", "E-CommerceApp", "BlogginAway"];
  
  export const projectCardImages = [
    {
      name: "example-1",
      image: Logo,
    },
  ];
  //formspree submit for contact form
  export const formspreeUrl = "https://formspree.io/f/xoqzazbr";
  