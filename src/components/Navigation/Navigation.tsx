import React from "react";
import { Link } from "react-scroll";
import classes from "./Navigation.module.scss";

export const Navigation = () => (
  <div className={classes.NavContainer}>
    <Link to="About" activeClass="active" spy={true} smooth={true} offset={-50}>
      About
    </Link>
    <Link
      to="Skills"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-50}
    >
      Skills
    </Link>
    <Link
      to="Projects"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-50}
    >
      Projects
    </Link>
    <Link
      to="Contact"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-50}
    >
      Contact
    </Link>
  </div>
);
