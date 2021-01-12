import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";

const CvDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  padding: 0.5rem;
`;

const CV = () => (
  <CvDiv>
    <Button value="Get my CV" />
  </CvDiv>
);

export default CV;
