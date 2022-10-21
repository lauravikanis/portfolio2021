import { MenuItem } from "components/LayoutHelper/MenuItem";
import { PictureRow } from "components/LayoutHelper/PictureRow";
import classes from "./App.module.scss";
import ando from "./assets/Insta/ando.jpg";
import berlin from "./assets/Insta/berlin.jpg";
import essen from "./assets/Insta/essen.jpg";
import { ReactComponent as Zickzackpath } from "./assets/zickzack.svg";
import "./style.scss";

export const About = () => {
  const Skills = [
    "HTML 5",
    "CSS",
    "SCSS",
    "Javascript",
    "Typescript",
    "React",
    "Styled Components",
    "Tailwind",
    "MongoDB",
    "Node.js",
    "Git",
    "Kubernetes",
    "Google Cloud",
    "MySQL",
    "Java",
    "nest.js",
  ];

  return (
    <>
      <div className={classes.MainDiv}>
        <MenuItem id={"About"} />
        <p>
          Hi there! Nice to meet you. <br />I am Laura, a Developer currently
          based in Düsseldorf, Germany .
        </p>
        <Zickzackpath className={classes.divider} />
        <h5>Technologies i have worked with so far:</h5>
        <div className={classes.SkillContainer}>
          {Skills.map((skill) => (
            <div className={classes.Skills} key={skill}>
              <h5>{skill}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
