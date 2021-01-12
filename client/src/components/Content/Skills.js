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
