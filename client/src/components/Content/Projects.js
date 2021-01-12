import React from "react";
import styled from "styled-components/macro";
import githubpath from "../../assets/github.svg";
import herokupath from "../../assets/heroku.svg";
import Projectdetails from "../Container/Projectdetails.js";
import Detailcontainer from "../Container/Detailcontainer";

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background);
  padding: 0.5rem;

  h5 {
    margin: 0;
  }
`;

const Projects = () => (
  <ProjectsDiv>
    <h3>Walk the Line</h3>
    <h5>
      Digitales Gesellenstück für das Webdevelopment Bootcamp bei neue Fische
    </h5>
    <p>
      With my app &quot;Walk The Line&quot; I was able to realize one of my
      great interest: Music. The App gives you information about important
      music-places in Cologne based on your favorite genre. There is a search
      function where you can look for locations and you also have the
      possibility to save your favorite locationss. The frontend is React-based
      and the backend works with Node.js and a MongoDB database. In the future I
      plan to add more data records to the database and thus extend the user
      experience.
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
  </ProjectsDiv>
);

export default Projects;
