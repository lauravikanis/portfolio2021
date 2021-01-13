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
      From Print Media Designer to Web Developer. Our future is going to be
      digital. We need progress instead of stagnation - Without the leap into
      the digital realm, we will stand still. For me, things no longer just have
      to look good, but also have to function flawlessly. Still far from my end
      of the journeys I now know how to use technology to make my digital dreams
      come true.
    </p>
    <Divider />
    <p>
      Apart from working a lot on my computer, one of my main interests is
      music. I enjoy going to concerts (hopefully again after corona) and
      looking for new artists, tracks, and genres. A long time ago i even had a
      blog to write about new discoverys. Apart from music I also enjoy other
      aspects of arts and cultur such as visual and performing arts.
    </p>
    <Picturerow>
      <img src={instabowie} alt="pusher tony Mural at Cologne Ehrenfeld" />
      <img src={instaludwig} alt="Rooftopterrace at Museum Ludwig" />
    </Picturerow>
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
