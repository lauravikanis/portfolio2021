import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Contact } from "components/LayoutHelper/Contact";
import { MenuItem } from "components/LayoutHelper/MenuItem";
import { PictureRow } from "components/LayoutHelper/PictureRow";
import { Project } from "components/LayoutHelper/Project";
import { Navigation } from "components/Navigation/Navigation";
import React from "react";
import classes from "./App.module.scss";
import ando from "./assets/Insta/ando.jpg";
import berlin from "./assets/Insta/berlin.jpg";
import essen from "./assets/Insta/essen.jpg";
import { ReactComponent as Zickzackpath } from "./assets/zickzack.svg";
import "./style.scss";

const App = () => {
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
      <div className={classes.AppDiv}>
        <Navigation />
        <div className={classes.MainDiv}>
          <Header />
          <MenuItem id={"About"} />
          <section className={classes.sectionContainer}>
            <p>
              Hi there! Nice to meet you. <br />I am Laura, a Developer and
              Photographer based in Düsseldorf, Germany.
            </p>
            <Zickzackpath className={classes.divider} />
          </section>
          <MenuItem id={"Photography and Design"} />
          <section className={classes.sectionContainer}>
            <p>
              Graphic dsign and Photography alwas interested me. Thats why a
              fterr school i considered an caeer is Desgin. After 7 years and
              working in advertising o can say, id like designinf to stay a
              hobby of mineI am interested in finding interesting angles and
              lines in viewpoints and like to take pitures very spontaniously.
              Thats why most of my photographic work is shot on mobile phone. I
              am currently also getting into shoting with a small compact
              point-to-shot camera.
            </p>
            <PictureRow pic1={berlin} pic2={essen} pic3={ando} />
            <Zickzackpath className={classes.divider} />
            <p>
              I am also voluntarily designing posters and handouts for a small
              theater in Leverkusen called&nbsp;
              <a href="https://www.matchboxtheater.de" target="_blank:">
                matchboxtheater
              </a>
            </p>
          </section>
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
          <section className={classes.ProjectsDiv}></section>
          <MenuItem id={"Contact"} />
          <section className={classes.sectionContainer}>
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
