import React from "react";
import styled from "styled-components/macro";
import starspath from "../../assets/stars.svg";
// import plantspath from "../../assets/plants.svg";
// import musicpath from "../../assets/music.svg";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    margin: 0 auto;
  }
`;

const About = () => (
  <AboutDiv>
    <p>
      From Print Media Designer to Web Developer. Why? The future is digital.
      progress instead of stagnation - Without the leap into the digital realm,
      we will stand still. For me, things no longer just have to look good, but
      also have to function flawlessly. Still far from finished with the journey
      into the future, I now know how to use technology to make my digital
      dreams come true.
    </p>
    <img src={starspath} alt="html" />
    {/* <p>
      I am a trained media designer and have been around in the industry for
      eight years. Before i started working full time as a graphic designer I
      trained as a Mediengestalter for three years. In my spare time, i design
      posters for a local theatre and manage their social media accounts.
    </p>
    <img src={musicpath} alt="music" />
    <p>
      I have always been interested in music. Whether it is a classical symphony
      or a modern production - I refuse almost nothing. I can not compose and
      write myself yet. But it gives me a lot of pleasure to create playlists
      for every occasion and I can talk for hours about the latest discoveries.
      Here you can find my Spotify profile. Apart from creating digital
      playlists, I collect vinyl, i.e. records, and I am a real concert junkie.
    </p>
    <img src={plantspath} alt="plants" />
    <p>
      Apart from working a lot on my computer, I love nature. In my spare time,
      I like to collect houseplants and propagate the ones I already own. My
      favourite plant is my fiddle leave-fig, but I love all my green babies..
    </p> */}
  </AboutDiv>
);

export default About;
