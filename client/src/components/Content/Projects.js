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
  /* max-width: 600px;
  width: 90%; */

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
      Es war mir sehr wichtig eine meiner größten Interessen in meine
      Gesellenstück auf zu nehmen: Musik. Es ging mir nicht nur darum etwas
      technisch sehr aufwendiges zu produzieren sonder etwa, das mir Spaß macht.
      Mit meiner App „Walk the Line“ kann man sich Informationen musikalisch
      wichtige Orte in Köln anhand des Lieblingsgeneres ausgeben lassen. Es gibt
      eine Suche, in der man Orte suchen kann und es besteht die Möglichkeit
      seine Lieblingslocations als Favorite speichern.
    </p>
    <Projectdetails>
      <Detailcontainer>
        <img src={githubpath} alt="github" />
        GitHub
      </Detailcontainer>
      <Detailcontainer>
        <img src={herokupath} alt="deployment" />
        Deployment
      </Detailcontainer>
    </Projectdetails>
  </ProjectsDiv>
);

export default Projects;
