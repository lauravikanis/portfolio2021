import React from "react";
import styled from "styled-components/macro";
import profilepic from "../../assets/profile.jpg";
import Picturerow from "../Container/Picturerow";

// import plantspath from "../../assets/plants.svg";
// import musicpath from "../../assets/music.svg";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  padding: 0.5rem;
`;

const About = () => (
  <AboutDiv>
    <p>
      From Print Media Designer to Web Developer. Why? The future is digital.
      progress instead of stagnation - Without the leap into the digital realm,
      we will stand still. For me, things no longer just have to look good, but
      also have to function flawlessly. Still far from my end of the journeys, I
      now know how to use technology to make my digital dreams come true.
    </p>
    <Picturerow>
      <img src={profilepic} alt="Laura" />
      <img src={profilepic} alt="Laura" />
      <img src={profilepic} alt="Laura" />
    </Picturerow>
    <p>
      Apart from working a lot on my computer, I love discovering new musik and
      and enjoy going to concerts (hopefully again after corona). I like looking
      around museums and visiting theaters. <br />
      <br />
      Since 2011 am am doing voluntary work for a small theater in Leverkusen
      called<a href="https://www.matchboxtheater.de"> matchboxtheater</a>. Most
      of theyr posters are designed by me. and a future project of mine might be
      to relaunch their website. I
    </p>
  </AboutDiv>
);

export default About;
