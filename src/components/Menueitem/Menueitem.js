import styled from "styled-components/macro";
import PropTypes from "prop-types";

const MenueItem = styled.div`
  display: flex;
  justify-content: center;
  color: var(--background);
  background-color: var(--primary-color);
  text-align: center;
  margin-top: 5rem;
  transform: skewX(-25deg);

  h2 {
    margin: 0.2rem;
    transform: skewX(25deg);
  }
`;

MenueItem.propTypes = {
  headine: PropTypes.string,
};

export default MenueItem;
