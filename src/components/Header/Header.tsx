import React from "react";
import profilepic from "../../assets/IMG_0340_web.jpg";
import styled from "styled-components/macro";

const HeaderContainer = styled.header`
  margin-top: 7rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  height: 60vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 100px;
    margin-right: 10%;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  h1 {
    @media (max-width: 1080px) {
      width: 350px;
    }
  }

  h1,
  h5,
  h3 {
    margin: 0 0 5px 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <img src={profilepic} alt="Laura" />
    <div>
      <h1>Laura Vikanis</h1>

      <h3>Web Development / Design</h3>
    </div>
  </HeaderContainer>
);

export default Header;
