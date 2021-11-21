import React from "react";
import { Link } from "react-scroll";
import classes from "./Navigation.module.scss";

export const Navigation = () => (
  <div className={classes.NavContainer}>
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
  </div>
);
