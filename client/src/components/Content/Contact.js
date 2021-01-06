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
    <h3>Find me here:</h3>
    <span>LinkedIn</span>
    <span>Facebook</span>
    <span>Instagram</span>
    <h3>Or leave me a message</h3>
    <form>
      <input />
      <input />
      <Button value="send" />
    </form>
  </ContactDiv>
);

export default Contact;
