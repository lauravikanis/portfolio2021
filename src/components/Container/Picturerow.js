import styled from "styled-components/macro";

const Picturerow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  img {
    height: 200px;
    margin: 0.5rem;
  }
`;

export default Picturerow;
