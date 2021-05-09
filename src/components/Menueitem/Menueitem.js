import styled from "styled-components/macro";
import PropTypes from "prop-types";

const MenueItem = styled.div`
  display: flex;
  justify-content: center;
  color: var(--primary-color);
  border-radius: 15px;
  text-align: center;
  margin-top: 5rem;

  h2 {
    margin: 0.25rem;
  }
`;

MenueItem.propTypes = {
  secondary: PropTypes.bool,
  headine: PropTypes.string,
};

export default MenueItem;
