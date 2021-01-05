import React from "react";
import playceholder from "../../assets/blueplaceholder.svg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 20% 80%;
  justify-content: space-between;
  width: 90%;

  img {
    height: 75px;
    padding: 0 2rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <img src={playceholder} alt="Laura" />
    <div>
      <h2>Laura Vikanis</h2>
      <h3>Hier steht Text</h3>
    </div>
  </HeaderContainer>
);

export default Header;
