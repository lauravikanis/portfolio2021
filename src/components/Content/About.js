import React from "react";
import styled from "styled-components/macro";
import Picturerow from "../Container/Picturerow";

import instabowie from "../../assets/Insta/Bowie_square.jpg";
import instaludwig from "../../assets/Insta/Ludwig_square.jpg";
import Divider from "../Divider";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  p {
    width: 90%;
  }
`;

const About = () => (
  <AboutDiv>
    <p>
      Laura is a Web Developer and Graphic Designer based in Cologne, Germany
    </p>
    <Divider />
    <p>
      During last couple of years I often asked myself: Is my job right for me?
      Last year decided that time moves on and I have to change something. I
      couldn‘t go on being a Graphic Designer. There had to be a chance for a
      new beginning. Starting in Summer 2020 I attended a 4-week long workshop
      at shecodes.io where I learned the basics of HTML, CSS and basic
      Javascript. Afterwards, I wanted to challenge myself further: I decided to
      self-teach myself coding. In autumn I attended the Web Developer Bootcamp
      at neue Fische, which I completed in December/January. During this time I
      found myself enjoying coding a lot - it just felt right. I didn‘t only
      have to produce content which looked good, I am now able to produce
      functional components which do the things I tell them to do.
    </p>
    <Picturerow>
      <img src={instabowie} alt="pusher tony Mural at Cologne Ehrenfeld" />
      <img src={instaludwig} alt="Rooftopterrace at Museum Ludwig" />
    </Picturerow>{" "}
    <p>
      Apart from working a lot on my computer, one of my main interests is
      music. I enjoy going to concerts (hopefully again after corona) and
      looking for new artists, tracks, and genres. A long time ago i even had a
      blog to write about new discoverys. Apart from music I also enjoy other
      aspects of arts and cultur such as visual and performing arts.
    </p>
    <Divider />
    <p>
      Since 2011 I am voluntarily designing posters and handouts for a small
      theater in Leverkusen called
      <a href="https://www.matchboxtheater.de" target="_blank:">
        {" "}
        matchboxtheater
      </a>
      . A future goal of mine is to redesign and relaunch their website.
    </p>
  </AboutDiv>
);

export default About;
