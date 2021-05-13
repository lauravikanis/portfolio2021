import React from "react";
import styled from "styled-components/macro";
import Skillcontainer from "../Skillcontainer/Skillcontainer";

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

const Skills = () => (
  <SkillsDiv>
    <h3>TechStack</h3>
    <Container>
      <Skillcontainer>
        <h5>HTML 5</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>CSS 3</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>Javascript</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>Typescript</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>React</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>Styled Components</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>Tailwind</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>MongoDB</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>Node.js</h5>
      </Skillcontainer>
      <Skillcontainer>
        <h5>Git</h5>
      </Skillcontainer>
    </Container>
  </SkillsDiv>
);

export default Skills;
