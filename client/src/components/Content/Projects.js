import React from "react";
import styled from "styled-components/macro";

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const Projects = () => (
  <ProjectsDiv>
    <h3>TechStack</h3>
    <div>
      HTML 5, CSS 3, React 17, Javascript, MongoDB, Storybook, npm, Git, Create
      React App,
    </div>
  </ProjectsDiv>
);

export default Projects;
