import React from "react";
import styled from "styled-components/macro";
import githubpath from "../../assets/github.svg";
import herokupath from "../../assets/heroku.svg";
import Projectdetails from "../Container/Projectdetails.js.js";
import Detailcontainer from "../Container/Detailcontainer";

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

const Projects = () => (
  <ProjectsDiv>
    <Project>
      <h3>Walk the Line</h3>
      <h5>
        Digitales Gesellenstück für das Webdevelopment Bootcamp bei neue Fische
      </h5>
      <p>
        With my app &quot;Walk The Line&quot; I was able to build an App around
        my biggest passion: Music. The App gives you information about important
        music-places in and around Cologne based on your favorite genre. There
        is a search function for specific locations and you also have the
        possibility to save your locations to favourites. The frontend is
        React-based and the backend works with Node.js and a MongoDB database.
        In the future I plan to add more data records to the database and thus
        extend the user experience.
      </p>
      <Projectdetails>
        <Detailcontainer>
          <a href="https://github.com/lauravikanis/WalkTheLine">
            <img src={githubpath} alt="github" />
            GitHub
          </a>
        </Detailcontainer>
        <Detailcontainer>
          <a href="https://walktheline.herokuapp.com/">
            <img src={herokupath} alt="deployment" />
            Deployment
          </a>
        </Detailcontainer>
      </Projectdetails>
    </Project>

    <Project>
      <h3>lauravikanis.de</h3>
      <h5>personal Website</h5>
      <p>Crate-React-App based personal portfolio</p>
      <Projectdetails>
        <Detailcontainer>
          <a href="https://github.com/lauravikanis/WalkTheLine">
            <img src={githubpath} alt="github" />
            GitHub
          </a>
        </Detailcontainer>
        <Detailcontainer>
          <a href="https://www.lauravikanis.de/">
            <img src={herokupath} alt="deployment" />
            Deployment
          </a>
        </Detailcontainer>
      </Projectdetails>
    </Project>
  </ProjectsDiv>
);

export default Projects;
