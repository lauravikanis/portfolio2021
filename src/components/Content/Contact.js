import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";

import linkedinpath from "../../assets/linkedin.svg";
import facebookpath from "../../assets/facebook.svg";
import instagrampath from "../../assets/insta.svg";
import githubpath from "../../assets/github.svg";
import twitterpath from "../../assets/twitter.svg";

import Projectdetails from "../Container/Projectdetails.js";
import Detailcontainer from "../Container/Detailcontainer";

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    width: 25px;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const Contact = () => (
  <ContactDiv>
    <h3>Want to get in touch?</h3>
    <Projectdetails>
      <Detailcontainer>
        <a href="https://github.com/lauravikanis">
          <img src={githubpath} alt="github" />
          GitHub
        </a>
      </Detailcontainer>
      <Detailcontainer>
        <a href="https://www.linkedin.com/in/lauravikanis/">
          <img src={linkedinpath} alt="linkedin" />
          LinkedIn
        </a>
      </Detailcontainer>
    </Projectdetails>
    <Projectdetails>
      <Detailcontainer>
        <a href="https://www.facebook.com/laura.vikanis/">
          <img src={facebookpath} alt="facebook" />
          Facebook
        </a>
      </Detailcontainer>
      <Detailcontainer>
        <a href="https://www.instagram.com/loeremoehre/">
          <img src={instagrampath} alt="instagram" />
          Instagram
        </a>
      </Detailcontainer>
      <Detailcontainer>
        {" "}
        <a href="https://twitter.com/loeremoehre">
          <img src={twitterpath} alt="twitter" />
          Twitter
        </a>
      </Detailcontainer>
    </Projectdetails>
    <h3>Send me a message</h3>

    <Button href="mailto:info@lauravikanis.de"> Send Email</Button>
  </ContactDiv>
);

export default Contact;
