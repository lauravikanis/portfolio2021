import React from "react";
import styled from "styled-components/macro";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const About = () => (
  <AboutDiv>
    <h3>Hier steht ein Headline</h3>
    <p>
      Laura Vikanis is a Web Developer and Designer based in Cologne, Germany.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
    <h3>Hier steht ein Headline</h3>
    <p>
      Laura Vikanis is a Web Developer and Designer based in Cologne, Germany.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
    </p>
  </AboutDiv>
);

export default About;
