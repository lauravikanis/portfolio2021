import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";

import linkedinpath from "../../assets/linkedin.svg";
import facebookpath from "../../assets/facebook.svg";
import instagrampath from "../../assets/insta.svg";

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;

  img {
    width: 25px;
    margin-right: 1rem;
  }
`;

const Contact = () => (
  <ContactDiv>
    <h3>Find me here:</h3>
    <span>
      <img src={linkedinpath} alt="linkedin" />
      LinkedIn
    </span>
    <span>
      <img src={facebookpath} alt="facebook" />
      Facebook
    </span>
    <span>
      <img src={instagrampath} alt="instagram" />
      Instagram
    </span>
    <h3>Send me a message</h3>

    <Button value="Send Loveletters" />
  </ContactDiv>
);

export default Contact;
