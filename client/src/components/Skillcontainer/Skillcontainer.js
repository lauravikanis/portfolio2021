import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Skill = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--action-color);
  color: black;
  border-radius: 15px;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  margin: 0.25rem;
`;

Skill.propTypes = {
  name: PropTypes.string,
};

export default Skill;
