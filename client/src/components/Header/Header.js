import React from "react";
import playceholder from "../../assets/blueplaceholder.svg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 450px;
  align-items: center;

  img {
    height: 75px;
    margin-left: 2rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  div > h2,
  h3 {
    margin: 0;
    padding: 0;
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
