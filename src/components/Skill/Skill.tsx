import styled from "styled-components/macro";
import cursor from "../../assets/brainstorm-skill.png";

const Skills = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--action-color);
  color: black;
  text-align: center;
  margin-top: 1rem;
  padding: 1.5rem;
  margin: 0.5rem;
  transform: skewX(-25deg);
  cursor: url(${cursor}) 12 12, move;

  h5 {
    transform: skewX(25deg);
  }
`;

export default Skills;
