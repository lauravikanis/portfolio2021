import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Skill = styled.div`
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

Skill.propTypes = {
  name: PropTypes.string,
};

export default Skill;
