import Header from "../components/Header/Header";
import Menueitem from "../components/Menueitem/Menueitem";
import styled from "styled-components/macro";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import Divider from "../components/Divider";
import Button from "../components/Button/Button";
import Skill from "../components/Skill/Skill";

import linkedinpath from "../assets/linkedin.svg";
import facebookpath from "../assets/facebook.svg";
import instagrampath from "../assets/insta.svg";
import githubpath from "../assets/github.svg";
import twitterpath from "../assets/twitter.svg";
import herokupath from "../assets/heroku.svg";
import deploymentpath from "../assets/deployment.svg";

import Projectdetails from "../components//Container/Projectdetails";
import Detailcontainer from "../components/Container/Detailcontainer";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  width: 80%;
  background-color: var(--background);
`;

const AboutDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: var(--background);

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
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0.5rem;

  width: 90%;

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

const Page = () => (
  <>
    <Navigation />
    <MainDiv>
      <Header />
      <Menueitem id="about">
        <h2>About</h2>
      </Menueitem>
      <AboutDiv>
        <p>
          Switching careers during a global pandemic is impossible? No, it is
          not! Starting in Summer 2020 I attended a 4-week long workshop at
          shecodes.io where I learned the basics of HTML, CSS and basic
          Javascript. Afterwards, I wanted to challenge myself further: I
          decided to self-teach myself coding. In autumn I attended the Web
          Developer Bootcamp at neue Fische, which I completed in
          December/January. A few months later I got a full-time job at a tech
          company where I am now part of an agile development team. Even if in
          the last couple of months my learning curve was very steep and I
          learned a lot I do not intend on slowing down.
        </p>
        <Divider />
        {/* <Picturerow>
      <img src={instabowie} alt="pusher tony mural at Cologne Ehrenfeld" />
      <img src={instaludwig} alt="Rooftopterrace at Museum Ludwig" />
    </Picturerow>{" "} */}
        <p>
          Apart from working a lot on my computer, one of my main interests is
          music. I enjoy going to concerts (hopefully again after corona) and
          looking for new artists, tracks, and genres. Apart from music I also
          enjoy other aspects of arts and cultur such as visual and performing
          arts.
        </p>
        <Divider />
        <p>
          Since 2011 I am voluntarily designing posters and handouts for a small
          theater in Leverkusen called
          <a href="https://www.matchboxtheater.de" target="_blank:">
            matchboxtheater
          </a>
          .
        </p>
      </AboutDiv>{" "}
      <Menueitem id="skills">
        <h2>Skills</h2>
      </Menueitem>
      <SkillsDiv>
        <h3>TechStack</h3>
        <Container>
          <Skill>HTML 5</Skill>
          <Skill>CSS 3</Skill>
          <Skill>Javascript</Skill>
          <Skill>Typescript</Skill>
          <Skill>React</Skill>
          <Skill>Styled Components</Skill>
          <Skill>Tailwind</Skill>
          <Skill>MongoDB</Skill>
          <Skill>Node.js</Skill>
          <Skill>Git</Skill>
        </Container>
      </SkillsDiv>{" "}
      <Menueitem id="projects">
        <h2>Projects</h2>
      </Menueitem>
      <ProjectsDiv>
        <Project>
          <h3>Walk the Line</h3>
          <h5>
            Digital &quot;Gesellenstück&quot; for the webdevelopment bootcamp at
            neuefische
          </h5>
          <p>
            With my app &quot;Walk The Line&quot; I was able to build an App
            around my biggest passion: Music. The App gives you information
            about the most important music-locations in and around Cologne based
            on your favorite genre. There is a search function for specific
            locations and you also have the possibility to save your locations
            to favourites. The frontend is React-based and the backend works
            with Node.js and a MongoDB database. In the future I plan to add
            more data records to the database and thus extend the user
            experience.
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
        <Divider />
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
            <a href="https://www.facebook.com/laura.vikanis/" target="_blank:">
              <img src={facebookpath} alt="facebook" />
              Facebook
            </a>
          </Detailcontainer>
          <Detailcontainer>
            <a href="https://www.instagram.com/loeremoehre/" target="_blank:">
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
  </>
);

export default Page;
