import React from "react";
import profilepic from "../../assets/profile.jpg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);

  img {
    height: 80px;
    border-radius: 50px;
    margin-right: 10%;
  }

  h2,
  h5 {
    margin: 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <img src={profilepic} alt="Laura" />
    <div>
      <h2>Laura Vikanis</h2>
      <h5>Web Development / Design</h5>
    </div>
  </HeaderContainer>
);

export default Header;
