import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Skill = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--secondary-color);
  color: white;
  border-radius: 15px;
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem;
`;

Skill.propTypes = {
  name: PropTypes.string,
};

export default Skill;
