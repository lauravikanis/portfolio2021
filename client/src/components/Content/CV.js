import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";
import Skillcontainer from "../Skillcontainer/Skillcontainer";

const CvDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
  align-items: center;
`;

const CV = () => (
  <CvDiv>
    <Button value="CV" />
  </CvDiv>
);

export default CV;
