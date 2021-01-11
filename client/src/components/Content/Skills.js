import React from "react";
import styled from "styled-components/macro";
import Skillcontainer from "../Skillcontainer/Skillcontainer";

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skills = () => (
  <SkillsDiv>
    <h3>TechStack</h3>
    <Container>
      <Skillcontainer>HTML 5</Skillcontainer>
      <Skillcontainer>CSS 3</Skillcontainer>
      <Skillcontainer>Javascript</Skillcontainer>
      <Skillcontainer>React 17</Skillcontainer>
      <Skillcontainer>MongoDB</Skillcontainer>
      <Skillcontainer>Node.js</Skillcontainer>
      <Skillcontainer>Git</Skillcontainer>
    </Container>
  </SkillsDiv>
);

export default Skills;
