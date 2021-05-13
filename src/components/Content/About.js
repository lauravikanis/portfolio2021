import React from "react";
import styled from "styled-components/macro";
import Divider from "../Divider";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: var(--background);

  p {
    width: 90%;
  }
`;

const About = () => (
  <AboutDiv>
    <p>
      Switching careers during a global pandemic is impossible? No, it is not!
      Starting in Summer 2020 I attended a 4-week long workshop at shecodes.io
      where I learned the basics of HTML, CSS and basic Javascript. Afterwards,
      I wanted to challenge myself further: I decided to self-teach myself
      coding. In autumn I attended the Web Developer Bootcamp at neue Fische,
      which I completed in December/January. A few months later I got a
      full-time job at a tech company where I am now part of an agile
      development team. Even if in the last couple of months my learning curve
      was very steep and I learned a lot I do not intend on slowing down.
    </p>
    <Divider />
    {/* <Picturerow>
      <img src={instabowie} alt="pusher tony mural at Cologne Ehrenfeld" />
      <img src={instaludwig} alt="Rooftopterrace at Museum Ludwig" />
    </Picturerow>{" "} */}
    <p>
      Apart from working a lot on my computer, one of my main interests is
      music. I enjoy going to concerts (hopefully again after corona) and
      looking for new artists, tracks, and genres. Apart from music I also enjoy
      other aspects of arts and cultur such as visual and performing arts.
    </p>
    <Divider />
    <p>
      Since 2011 I am voluntarily designing posters and handouts for a small
      theater in Leverkusen called
      <a href="https://www.matchboxtheater.de" target="_blank:">
        matchboxtheater
      </a>
      .
    </p>
  </AboutDiv>
);

export default About;
