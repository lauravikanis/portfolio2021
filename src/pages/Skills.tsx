import { MenuItem } from "components/LayoutHelper/MenuItem";
import classes from "./App.module.scss";
import "./style.scss";

export const Skills = () => {
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
        <MenuItem id={"Skills"} />
        <section className={classes.sectionContainer}>
          <h5>Technologies i have worked with so far:</h5>
          <div className={classes.SkillContainer}>
            {Skills.map((skill) => (
              <div className={classes.Skills} key={skill}>
                <h5>{skill}</h5>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
