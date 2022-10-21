import React from "react";
import profilepic from "../../assets/IMG_0340_web.jpg";
import classes from "./Header.module.scss";

export const Header = () => (
  <div className={classes.header}>
    <img src={profilepic} alt="Laura" />
    <div>
      <h1>Laura Vikanis</h1>
      <h3>Web Development / Design / Photography</h3>
    </div>
  </div>
);
