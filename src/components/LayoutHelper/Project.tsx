import { ReactComponent as GitHub } from "../../assets/github.svg";
import { ReactComponent as Deployment } from "../../assets/deployment.svg";
import classes from "./Project.module.scss";

interface ProjectProps {
  name: string;
  subHeadline: string;
  description: string;
  githubURL: string;
  deployURL: string;
}
export const Project = ({
  name,
  subHeadline,
  description,
  githubURL,
  deployURL,
}: ProjectProps) => {
  return (
    <div className={classes.container}>
      <h3>{name}</h3>
      <h5>{subHeadline}</h5>
      <p>{description}</p>
      <div className={classes.Projectdiv}>
        <a href={githubURL} target="_blank:">
          <GitHub />
          GitHub
        </a>

        <a href={deployURL} target="_blank:">
          <Deployment />
          Deployment
        </a>
      </div>
    </div>
  );
};
