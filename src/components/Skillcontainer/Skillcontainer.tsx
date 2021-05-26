import styled from "styled-components/macro";

const OneSkill = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--action-color);
  color: black;
  text-align: center;
  margin-top: 1rem;
  padding: 1.5rem;
  margin: 0.5rem;
  transform: skewX(-25deg);

  h5 {
    margin: 0;
    padding: 0;
    transform: skewX(25deg);
  }
`;

const Skill = (name: any) => <OneSkill>{name}</OneSkill>;

export default Skill;
