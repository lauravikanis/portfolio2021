import { MailButton } from "components/Button/Button";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Navigation } from "components/Navigation/Navigation";
import React from "react";
import classes from "./App.module.scss";
import deploymentpath from "./assets/deployment.svg";
import facebookpath from "./assets/facebook.svg";
import githubpath from "./assets/github.svg";
import herokupath from "./assets/heroku.svg";
import instagrampath from "./assets/insta.svg";
import linkedinpath from "./assets/linkedin.svg";
import twitterpath from "./assets/twitter.svg";
import { ReactComponent as Zickzackpath } from "./assets/zickzack.svg";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className={classes.AppDiv}>
        <Navigation />
        <div className={classes.MainDiv}>
          <Header />
          <div className={classes.MenueItem} id="about">
            <h2>About</h2>
          </div>
          <div className={classes.AboutDiv}>
            <p>
              Hi there! Nice to meet you. <br />
              I am Laura, a Web Developer from Cologne, Germany. <br />I worked
              as a graphic designer for 8 years but in the end, I decided to
              switch careers. I started my Developer career in summer 2020 by
              attending a 4-week workshop with shecodes.io. I got hooked
              immediately and decided to attend a 3month Bootcamp at neue Fische
              which I successfully graduated in January 2021. The most important
              thing I learned during this phase of my life was to never give up
              on my dreams and never be too shy to ask questions. There is
              always a solution to problems and I do not intend to reduce my
              steep learning course.
            </p>
            <Zickzackpath className={classes.divider} />
            <p>
              Apart from working a lot on my computer, one of my main interests
              is music. I enjoy going to concerts and looking for new artists,
              tracks, and genres. Apart from music I also enjoy other aspects of
              arts and cultur such as visual and performing arts.
            </p>
            <Zickzackpath className={classes.divider} />
            <p>
              Since 2011 I am voluntarily designing posters and handouts for a
              small theater in Leverkusen called&nbsp;
              <a href="https://www.matchboxtheater.de" target="_blank:">
                matchboxtheater
              </a>
              .
            </p>
          </div>
          <div className={classes.MenueItem} id="skills">
            <h2>Skills</h2>
          </div>
          <div className={classes.SkillsDiv}>
            <h3>TechStack</h3>
            <div className={classes.Container}>
              <div className={classes.Skills}>
                <h5>HTML 5</h5>
              </div>
              <div className={classes.Skills}>
                <h5>CSS 3</h5>
              </div>
              <div className={classes.Skills}>
                <h5>Javascript</h5>
              </div>
              <div className={classes.Skills}>
                <h5>Typescript</h5>
              </div>
              <div className={classes.Skills}>
                <h5>React</h5>
              </div>
              <div className={classes.Skills}>
                <h5>Styled Components</h5>
              </div>
              <div className={classes.Skills}>
                <h5>Tailwind</h5>
              </div>
              <div className={classes.Skills}>
                <h5>MongoDB</h5>
              </div>
              <div className={classes.Skills}>
                <h5>Node.js</h5>
              </div>
              <div className={classes.Skills}>
                <h5>Git</h5>
              </div>
            </div>
          </div>
          <div className={classes.MenueItem} id="projects">
            <h2>Projects</h2>
          </div>
          <div className={classes.ProjectsDiv}>
            <div className={classes.Project}>
              <h3>Walk the Line</h3>
              <h5>
                Digital &quot;Gesellenstück&quot; for the webdevelopment
                bootcamp at neuefische
              </h5>
              <p>
                With my app &quot;Walk The Line&quot; I was able to build an App
                around my biggest passion: Music. The App gives you information
                about the most important music-locations in and around Cologne
                based on your favorite genre. There is a search function for
                specific locations and you also have the possibility to save
                your locations to favourites. The frontend is React-based and
                the backend works with Node.js and a MongoDB database. In the
                future I plan to add more data records to the database and thus
                extend the user experience.
              </p>
              <div className={classes.Project}>
                <div className={classes.Detailcontainer}>
                  <a
                    href="https://github.com/lauravikanis/WalkTheLine"
                    target="_blank:"
                  >
                    <img src={githubpath} alt="github" />
                    GitHub
                  </a>
                </div>
                <div className={classes.Detailcontainer}>
                  <a href="https://walktheline.herokuapp.com/" target="_blank:">
                    <img src={herokupath} alt="deployment" />
                    Deployment
                  </a>
                </div>
              </div>
            </div>
            <Zickzackpath className={classes.divider} />
            <div className={classes.Project}>
              <h3>lauravikanis.de</h3>
              <h5>Personal Website</h5>
              <p>Create-React-App based personal portfolio</p>
              <div className={classes.ProjectDetails}>
                <div className={classes.Detailcontainer}>
                  <a
                    href="https://github.com/lauravikanis/WalkTheLine"
                    target="_blank:"
                  >
                    <img src={githubpath} alt="github" />
                    GitHub
                  </a>
                </div>
                <div className={classes.Detailcontainer}>
                  <a href="https://www.lauravikanis.de/" target="_blank:">
                    <img src={deploymentpath} alt="deployment" />
                    Deployment
                  </a>
                </div>
              </div>
            </div>
            <Zickzackpath className={classes.divider} />
            <div className={classes.Project}>
              <h3>badJokes</h3>
              <h5>Personal Project</h5>
              <p>Create-React-App based page which uses a joke API</p>
              <div className={classes.ProjectDetails}>
                <div className={classes.Detailcontainer}>
                  <a
                    href="https://github.com/lauravikanis/badJokes"
                    target="_blank:"
                  >
                    <img src={githubpath} alt="github" />
                    GitHub
                  </a>
                </div>
                <div className={classes.Detailcontainer}>
                  <a href="https://badjokes247.herokuapp.com/" target="_blank:">
                    <img src={deploymentpath} alt="deployment" />
                    Deployment
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.MenueItem} id="contact">
            <h2>Contact</h2>
          </div>
          <div className={classes.ContactDiv}>
            <h3>Want to get in touch?</h3>
            <div className={classes.ProjectDetails}>
              <div className={classes.Detailcontainer}>
                <a href="https://github.com/lauravikanis" target="_blank:">
                  <img src={githubpath} alt="github" />
                  GitHub
                </a>
              </div>
              <div className={classes.Detailcontainer}>
                <a
                  href="https://www.linkedin.com/in/lauravikanis/"
                  target="_blank:"
                >
                  <img src={linkedinpath} alt="linkedin" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className={classes.ProjectDetails}>
              <div className={classes.Detailcontainer}>
                <a
                  href="https://www.facebook.com/laura.vikanis/"
                  target="_blank:"
                >
                  <img src={facebookpath} alt="facebook" />
                  Facebook
                </a>
              </div>
              <div className={classes.Detailcontainer}>
                <a
                  href="https://www.instagram.com/loeremoehre/"
                  target="_blank:"
                >
                  <img src={instagrampath} alt="instagram" />
                  Instagram
                </a>
              </div>
              <div className={classes.Detailcontainer}>
                <a href="https://twitter.com/loeremoehre" target="_blank:">
                  <img src={twitterpath} alt="twitter" />
                  Twitter
                </a>
              </div>
            </div>
            <h3>Send me a message</h3>

            <MailButton
              mailTo={"mailto:info@lauravikanis.de"}
              text={"Send Email"}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default App;
