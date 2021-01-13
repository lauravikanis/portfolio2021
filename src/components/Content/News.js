import React from "react";
import styled from "styled-components/macro";
import Button from "../Button/Button";

const NewsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const News = () => (
  <NewsDiv>
    <Button value="Get my CV" />
  </NewsDiv>
);

export default News;
