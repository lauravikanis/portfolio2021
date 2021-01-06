import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const Skills = () => (
  <SkillsDiv>
    <h2>profession</h2>
    <div>Placeholder for skills</div>
    <h2>software</h2>
    <div>Placeholder for skills</div>
  </SkillsDiv>
);

export default Skills;
