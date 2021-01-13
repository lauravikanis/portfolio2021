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

  h5 {
    margin: 0 0.5rem;
  }
`;

const Navigation = () => (
  <NavContainer>
    <h5>About</h5>
    <h5>Skills</h5>
    <h5>Projects</h5>
    <h5>Contact</h5>
  </NavContainer>
);

export default Navigation;
