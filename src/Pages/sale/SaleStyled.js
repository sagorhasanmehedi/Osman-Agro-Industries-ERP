import styled from "styled-components";

export const PlainText2 = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 10px;
  border-bottom: ${(props) => props.BorderBottom || "none"}; ;
`;
