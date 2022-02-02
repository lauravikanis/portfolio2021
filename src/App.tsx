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
              Hi there! Nice to meet you. <br />
              I am Laura, a Developer from Germany. <br />I worked as a graphic
              designer for 8 years but in the end, I decided to switch careers.
              I started my Developer career in summer 2020. In autumn 2020 I
              attended a 3minth Bootcamp3month Bootcamp at neue Fische which I
              successfully graduated in January 2021. The most important thing I
              learned during this intense phase of my life was to never give up
              on my dreams and never be too shy to ask questions. There is
              always a solution to problems. I now work fulltime at a
              techcompany and love to discover new technologies and learn about
              them.
            </p>
            <Zickzackpath className={classes.divider} />
            <p>
              Apart from working a lot on my computer, one of my main interests
              is music. I enjoy going to concerts and looking for new artists,
              tracks, and genres. Apart from music I also enjoy other aspects of
              arts and cultur such as visual and performing arts. I have an
              active Instagram account on which i share my love of puristic,
              minimalistic and symmetric pictures (nearly) all taken by myself.
              Here you can find a little Sneak Peak:
            </p>
            <PictureRow pic1={berlin} pic2={essen} pic3={ando} />
            <Zickzackpath className={classes.divider} />
            <p>
              In my free time i am also voluntarily designing posters and
              handouts for a small theater in Leverkusen called&nbsp;
              <a href="https://www.matchboxtheater.de" target="_blank:">
                matchboxtheater
              </a>
              .
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
