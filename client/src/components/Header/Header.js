import React from "react";
import profilepic from "../../assets/profile.jpg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 20% auto;
  justify-content: space-between;

  img {
    height: 80px;
    margin-left: 2rem;
    border-radius: 50px;
    margin-right: 1rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <img src={profilepic} alt="Laura" />
    <h2>Laura Vikanis</h2>
  </HeaderContainer>
);

export default Header;
