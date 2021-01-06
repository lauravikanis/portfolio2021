import React from "react";
import styled from "styled-components/macro";

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const Skills = () => (
  <SkillsDiv>
    <h3>profession</h3>
    <div>Placeholder for skills</div>
    <h3>software</h3>
    <div>Placeholder for skills</div>
  </SkillsDiv>
);

export default Skills;