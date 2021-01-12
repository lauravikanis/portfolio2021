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
      Mit meiner App „Walk The Line“habe ich mein großes Interesse am Thema
      Musik verwirklichen können: Mit Hilfe der App kann man sich anhand des
      Lieblingsgenres Informationen musikalisch wichtige Orte in Köln ausgeben
      lassen. Es gibt eine Suche, in der man Orte suchen kann und es besteht die
      Möglichkeit seine Lieblingslocations als Favorit speichern. Im Frontend
      setze ich hierbei auf React und im Backend arbeite ich mit Node.js und
      einer MongoDB Datenbank. In Zukunft habe ich vor weiter Datensätze in die
      Datenbank zu fügen und so die User Experience zu erweitern.
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
