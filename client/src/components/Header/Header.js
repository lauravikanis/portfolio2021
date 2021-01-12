import React from "react";
import profilepic from "../../assets/profile.jpg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 20% auto;
  justify-content: space-around;

  img {
    height: 80px;
    margin-left: 2rem;
    border-radius: 50px;
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
    <img src={profilepic} alt="Laura" />
    <h2>Laura Vikanis</h2>
  </HeaderContainer>
);

export default Header;
