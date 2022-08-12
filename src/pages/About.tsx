import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Contact } from "components/LayoutHelper/Contact";
import { MenuItem } from "components/LayoutHelper/MenuItem";
import { PictureRow } from "components/LayoutHelper/PictureRow";
import { Project } from "components/LayoutHelper/Project";
import { Navigation } from "components/Navigation/Navigation";
import React from "react";
import classes from "./App.module.scss";
import ando from "./assets/Insta/ando.jpg";
import berlin from "./assets/Insta/berlin.jpg";
import essen from "./assets/Insta/essen.jpg";
import { ReactComponent as Zickzackpath } from "./assets/zickzack.svg";
import "./style.scss";

export const About = () => {
  return (
    <>
      <div className={classes.MainDiv}>
        <MenuItem id={"About"} />
        <p>
          Hi there! Nice to meet you. <br />I am Laura, a Developer currently
          based in Düsseldorf, Germany .
        </p>
        <Zickzackpath className={classes.divider} />
        <p>
          Apart from working a lot on my computer, one of my main interests is
          music. I enjoy going to concerts and looking for new artists, tracks,
          and genres. Check out my Playlists on Spotify. Apart from music I also
          enjoy other aspects of arts and cultur such as visual and performing
          arts. I have an active Instagram account on which i share my love of
          taking puristic, minimalistic and symmetric pictures.
        </p>
        <PictureRow pic1={berlin} pic2={essen} pic3={ando} />
        <Zickzackpath className={classes.divider} />
        <p>
          In my free time i am also voluntarily designing posters and handouts
          for a small theater in Leverkusen called&nbsp;
          <a href="https://www.matchboxtheater.de" target="_blank:">
            matchboxtheater
          </a>
          .
        </p>
      </div>
    </>
  );
};
