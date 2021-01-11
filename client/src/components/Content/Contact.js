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

  img {
    width: 25px;
    margin-right: 1rem;
  }
`;

const Contact = () => (
  <ContactDiv>
    <h3>Find me here:</h3>
    <Projectdetails>
      <Detailcontainer>
        <img src={githubpath} alt="ggithub" />
        GitHub
      </Detailcontainer>
      <Detailcontainer>
        <img src={linkedinpath} alt="linkedin" />
        LinkedIn
      </Detailcontainer>{" "}
    </Projectdetails>
    <Projectdetails>
      <Detailcontainer>
        <img src={facebookpath} alt="facebook" />
        Facebook
      </Detailcontainer>
      <Detailcontainer>
        <img src={instagrampath} alt="instagram" />
        Instagram
      </Detailcontainer>
      <Detailcontainer>
        <img src={twitterpath} alt="twitter" />
        Twitter
      </Detailcontainer>
    </Projectdetails>
    <h3>Send me a message</h3>

    <Button value="Send Loveletters" />
  </ContactDiv>
);

export default Contact;
