import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const Contact = () => (
  <ContactDiv>
    <h2>Find me here:</h2>
    <span>LinkedIn</span>
    <span>Facebook</span>
    <span>Instagram</span>
    <h2>Or leave me a message</h2>
    <form>
      <input />
      <input />
      <Button />
    </form>
  </ContactDiv>
);

export default Contact;
