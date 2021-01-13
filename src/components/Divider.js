import styled from "styled-components/macro";
import zickzackpath from "../assets/zickzack.svg";

const DividerImg = styled.img`
  margin: 5% auto;
`;
const Divider = () => (
  <>
    <DividerImg src={zickzackpath} alt="zickzack" />
  </>
);
//

export default Divider;
