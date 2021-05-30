import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

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
  position: fixed;
  top: 0;
  transform: skewX(0deg);
  z-index: 1;

  a {
    color: white;
    margin: 0 0.5rem;
    font-size: 0.83em;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }
`;

const Navigation = () => (
  <NavContainer>
    <Link to="about" activeClass="active" spy={true} smooth={true} offset={-50}>
      About
    </Link>
    <Link
      to="skills"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-50}
    >
      Skills
    </Link>
    <Link
      to="projects"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-50}
    >
      Projects
    </Link>
    <Link
      to="contact"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-50}
    >
      Contact
    </Link>
  </NavContainer>
);

export default Navigation;
