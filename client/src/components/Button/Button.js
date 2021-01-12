import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--action-color);
  border-radius: 15px;
  border: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  height: 40px;
  margin: 15px auto;
  color: black;
  font-size: 0.75rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Mono", monospace;

  :hover {
    background-color: black;
    color: var(--action-color);
  }
  :active {
    background-color: black;
    color: var(--action-color);
  }
`;

Button.propTypes = {
  value: PropTypes.string,
};
export default Button;
