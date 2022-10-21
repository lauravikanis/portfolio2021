import { MenuItem } from "components/LayoutHelper/MenuItem";
import { Project } from "components/LayoutHelper/Project";
import classes from "./App.module.scss";
import { ReactComponent as Zickzackpath } from "./assets/zickzack.svg";
import "./style.scss";

export const Projects = () => {
  return (
    <>
      <div className={classes.AppDiv}>
        <div className={classes.MainDiv}>
          <MenuItem id={"Projects"} />
          <section className={classes.sectionContainer}>
            <Project
              name={"Walk the Line"}
              subHeadline={`Digital "Gesellenstück" for the webdevelopment
                bootcamp at neuefische`}
              description={`With my app "Walk The Line" I was able to build an App
                around my biggest passion: Music. The App gives you information
                about the most important music-locations in and around Cologne
                based on your favorite genre. There is a search function for
                specific locations and you also have the possibility to save
                your locations to favourites. The frontend is React-based and
                the backend works with Node.js and a MongoDB database. In the
                future I plan to add more data records to the database and thus
                extend the user experience.`}
              githubURL={"https://github.com/lauravikanis/WalkTheLine"}
              deployURL={"https://walktheline.herokuapp.com/"}
            />
            <Zickzackpath className={classes.divider} />
            <Project
              name={"lauravikanis.de"}
              subHeadline={"Personal Website"}
              description={"Create-React-App based personal portfolio"}
              githubURL={"https://github.com/lauravikanis/WalkTheLine"}
              deployURL={"https://www.lauravikanis.de/"}
            />{" "}
            <Zickzackpath className={classes.divider} />
            <Project
              name={"badJokes"}
              subHeadline={"Personal Project"}
              description={"Create-React-App based page which uses a joke API"}
              githubURL={"https://github.com/lauravikanis/badJokes"}
              deployURL={"https://badjokes247.herokuapp.com/"}
            />
          </section>
        </div>
      </div>
    </>
  );
};
