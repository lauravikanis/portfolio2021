import React from "react";
import styled from "styled-components/macro";

const NavContainer = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0;
  margin-bottom: 1rem;

  color: white;
  background-color: black;
  width: 100vw;
  padding: 0.5rem 10%;

  a {
    color: white;
    margin: 0 0.5rem;
  }
`;

const Navigation = () => (
  <NavContainer>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </NavContainer>
);

export default Navigation;
