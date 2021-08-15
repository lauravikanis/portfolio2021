import React from "react";
import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header/Header";
import Menueitem from "./components/Menueitem/Menueitem";
import styled from "styled-components/macro";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Button from "./components/Button/Button";
import Skill from "./components/Skill/Skill";
import Projectdetails from "./components/LayoutHelper/Projectdetails";
import Detailcontainer from "./components/LayoutHelper/Detailcontainer";

import linkedinpath from "./assets/linkedin.svg";
import facebookpath from "./assets/facebook.svg";
import instagrampath from "./assets/insta.svg";
import githubpath from "./assets/github.svg";
import twitterpath from "./assets/twitter.svg";
import herokupath from "./assets/heroku.svg";
import deploymentpath from "./assets/deployment.svg";
import zickzackpath from "./assets/zickzack.svg";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  width: 80%;
  background-color: var(--background);
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: var(--background);

  img {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  p {
    width: 90%;
  }
`;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  img {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0.5rem;
  width: 90%;

  img {
    padding-top: 0;
    padding-bottom: 0;
  }

  h5 {
    margin: 0;
  }
`;

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin-top: 1rem;
`;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    width: 25px;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <Navigation />
        <MainDiv>
          <Header />
          <Menueitem id="about">
            <h2>About</h2>
          </Menueitem>
          <AboutDiv>
            <p>
              Hi there! Nice to meet you. <br/>
              I am Laura, a Web Developer from Cologne, Germany. <br/>
              I worked as a graphic designer for 8 years but in the end, I decided to switch careers.
              I started my Developer career in summer 2020 by attending a 4-week workshop with shecodes.io. I got hooked immediately and decided to attend a 3month Bootcamp at neue Fische which I successfully graduated in January 2021.  
              The most important thing I learned during this phase of my life was to never give up on my dreams and never be too shy to ask questions. There is always a solution to problems and I do not intend to reduce my steep learning course.
            </p>
            <img src={zickzackpath} alt="zickzack" />
            <p>
              Apart from working a lot on my computer, one of my main interests
              is music. I enjoy going to concerts and looking for new artists, tracks, and genres. Apart from music
              I also enjoy other aspects of arts and cultur such as visual and
              performing arts.
            </p>
            <img src={zickzackpath} alt="zickzack" />
            <p>
              Since 2011 I am voluntarily designing posters and handouts for a
              small theater in Leverkusen called&nbsp;
              <a href="https://www.matchboxtheater.de" target="_blank:">
                matchboxtheater
              </a>
              .
            </p>
          </AboutDiv>
          <Menueitem id="skills">
            <h2>Skills</h2>
          </Menueitem>
          <SkillsDiv>
            <h3>TechStack</h3>
            <Container>
              <Skill>
                <h5>HTML 5</h5>
              </Skill>
              <Skill>
                <h5>CSS 3</h5>
              </Skill>
              <Skill>
                <h5>Javascript</h5>
              </Skill>
              <Skill>
                <h5>Typescript</h5>
              </Skill>
              <Skill>
                <h5>React</h5>
              </Skill>
              <Skill>
                <h5>Styled Components</h5>
              </Skill>
              <Skill>
                <h5>Tailwind</h5>
              </Skill>
              <Skill>
                <h5>MongoDB</h5>
              </Skill>
              <Skill>
                <h5>Node.js</h5>
              </Skill>
              <Skill>
                <h5>Git</h5>
              </Skill>
            </Container>
          </SkillsDiv>
          <Menueitem id="projects">
            <h2>Projects</h2>
          </Menueitem>
          <ProjectsDiv>
            <Project>
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
              <Projectdetails>
                <Detailcontainer>
                  <a
                    href="https://github.com/lauravikanis/WalkTheLine"
                    target="_blank:"
                  >
                    <img src={githubpath} alt="github" />
                    GitHub
                  </a>
                </Detailcontainer>
                <Detailcontainer>
                  <a href="https://walktheline.herokuapp.com/" target="_blank:">
                    <img src={herokupath} alt="deployment" />
                    Deployment
                  </a>
                </Detailcontainer>
              </Projectdetails>
            </Project>
            <img src={zickzackpath} alt="zickzack" />
            <Project>
              <h3>lauravikanis.de</h3>
              <h5>Personal Website</h5>
              <p>Create-React-App based personal portfolio</p>
              <Projectdetails>
                <Detailcontainer>
                  <a
                    href="https://github.com/lauravikanis/WalkTheLine"
                    target="_blank:"
                  >
                    <img src={githubpath} alt="github" />
                    GitHub
                  </a>
                </Detailcontainer>
                <Detailcontainer>
                  <a href="https://www.lauravikanis.de/" target="_blank:">
                    <img src={deploymentpath} alt="deployment" />
                    Deployment
                  </a>
                </Detailcontainer>
              </Projectdetails>
            </Project>
            <img src={zickzackpath} alt="zickzack" />
            <Project>
              <h3>badJokes</h3>
              <h5>Personal Project</h5>
              <p>Create-React-App based page which uses a joke API</p>
              <Projectdetails>
                <Detailcontainer>
                  <a
                    href="https://github.com/lauravikanis/badJokes"
                    target="_blank:"
                  >
                    <img src={githubpath} alt="github" />
                    GitHub
                  </a>
                </Detailcontainer>
                <Detailcontainer>
                  <a href="https://badjokes247.herokuapp.com/" target="_blank:">
                    <img src={deploymentpath} alt="deployment" />
                    Deployment
                  </a>
                </Detailcontainer>
              </Projectdetails>
            </Project>
          </ProjectsDiv>{" "}
          <Menueitem id="contact">
            <h2>Contact</h2>
          </Menueitem>
          <ContactDiv>
            <h3>Want to get in touch?</h3>
            <Projectdetails>
              <Detailcontainer>
                <a href="https://github.com/lauravikanis" target="_blank:">
                  <img src={githubpath} alt="github" />
                  GitHub
                </a>
              </Detailcontainer>
              <Detailcontainer>
                <a
                  href="https://www.linkedin.com/in/lauravikanis/"
                  target="_blank:"
                >
                  <img src={linkedinpath} alt="linkedin" />
                  LinkedIn
                </a>
              </Detailcontainer>
            </Projectdetails>
            <Projectdetails>
              <Detailcontainer>
                <a
                  href="https://www.facebook.com/laura.vikanis/"
                  target="_blank:"
                >
                  <img src={facebookpath} alt="facebook" />
                  Facebook
                </a>
              </Detailcontainer>
              <Detailcontainer>
                <a
                  href="https://www.instagram.com/loeremoehre/"
                  target="_blank:"
                >
                  <img src={instagrampath} alt="instagram" />
                  Instagram
                </a>
              </Detailcontainer>
              <Detailcontainer>
                <a href="https://twitter.com/loeremoehre" target="_blank:">
                  <img src={twitterpath} alt="twitter" />
                  Twitter
                </a>
              </Detailcontainer>
            </Projectdetails>
            <h3>Send me a message</h3>

            <Button href="mailto:info@lauravikanis.de"> Send Email</Button>
          </ContactDiv>{" "}
        </MainDiv>
        <Footer>
          <h5>- Laura Vikanis 2021 -</h5>
        </Footer>
      </AppDiv>
    </>
  );
};

export default App;
