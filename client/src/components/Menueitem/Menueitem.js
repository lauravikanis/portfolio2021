import styled from "styled-components/macro";
import PropTypes from "prop-types";

const MenueItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.secondary ? "var(--secondary-color)" : "var(--primary-color)"};
  color: white;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  margin-top: 1rem;

  h2 {
    margin: 0.25rem;
  }
`;

MenueItem.propTypes = {
  secondary: PropTypes.bool,
  headine: PropTypes.string,
};

export default MenueItem;
