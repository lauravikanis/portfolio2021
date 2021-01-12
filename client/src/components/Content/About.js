import React from "react";
import styled from "styled-components/macro";
// import Picturerow from "../Container/Picturerow";

// import instabowie from "../../assets/Insta/Bowie_square.jpg";
// import instabubblegum from "../../assets/Insta/Bubblegum_square.jpg";
// import instaludwig from "../../assets/Insta/Ludwig_square.jpg";

import zickzackpath from "../../assets/zickzack.svg";

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

  img {
    width: 90%;
    max-width: 250px;
    margin: 1rem auto;
  }
`;

const About = () => (
  <AboutDiv>
    <p>
      From Print Media Designer to Web Developer. Our future is going to be
      digital. We need progress instead of stagnation - Without the leap into
      the digital realm, we will stand still. For me, things no longer just have
      to look good, but also have to function flawlessly. Still far from my end
      of the journeys, I now know how to use technology to make my digital
      dreams come true.
    </p>
    <img src={zickzackpath} alt="zickzack" />

    {/* <Picturerow>
      <img src={instabowie} alt="Laura" />
      <img src={instabubblegum} alt="Laura" />
    </Picturerow> */}
    <p>
      Apart from working a lot on my computer, one of my main interests is
      musik. I enjoy going to concerts (hopefully again after corona) and
      looking arund for new artists, tracks, and genres. A long time ago i even
      had a blog to write about new discoverys. Apart from music I also enjoy
      other aspects of arts and cultur such as performing arts.{" "}
    </p>
    <img src={zickzackpath} alt="zickzack" />

    {/* <Picturerow>
      <img src={instaludwig} alt="Museum Ludwig" />
    </Picturerow> */}
    <p>
      Since 2011 am am voluntaryly designing posters and handouts for a small
      theater in Leverkusen called
      <a href="https://www.matchboxtheater.de"> matchboxtheater</a>. A future
      goal of mine is to redesign and relaunch their website.
    </p>
  </AboutDiv>
);

export default About;
