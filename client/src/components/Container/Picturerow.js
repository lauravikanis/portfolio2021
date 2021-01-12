import styled from "styled-components/macro";

const Picturerow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  img {
    /* border-radius: 50px; */
    width: 100px;
    margin: 0.5rem;
  }
`;

export default Picturerow;
