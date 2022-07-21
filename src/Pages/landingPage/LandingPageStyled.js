import styled from "styled-components";

export const CardContainer = styled.div`
  // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  box-shadow: ${(props) => props.Shadow || "0px 4px 8px rgba(0, 0, 0, 0.16)"};
  border-radius: 10px;
  padding: ${(props) => props.Padding || "20px"};
`;

export const Input = styled.input`
  width: 100%;
  margin: 10px 0px;
  padding: ${(props) => props.Padding || "10px"};
  border: 1px solid #e0e0e0;
  font-family: "Gotham Rounded";
  border-radius: 7px;
  color: ${(props) => props.Color || "#0488a0"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#0488a0"};
  }
`;
export const Select = styled.select`
  width: 100%;
  margin: 10px 0px;
  padding: ${(props) => props.Padding || "10px"};
  border: 1px solid #e0e0e0;
  font-family: "Gotham Rounded";
  border-radius: 7px;
  color: ${(props) => props.Color || "#0488a0"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#0488a0"};
  }
`;

export const Lavel = styled.label`
  width: 100%;
  padding: ${(props) => props.Padding || "15px 10px 0px"};
  font-family: "Gotham Rounded";
  color: ${(props) => props.Color || "#0488a0"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#0488a0"};
  }
`;

export const Button = styled.button`
  background: #0488a0;
  color: white;
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "16px"};
  padding: ${(props) => props.Padding || "10px"};
  border-radius: ${(props) => props.BorderRadius || "8px"};
  border: none;
`;
export const ButtonGroup = styled.button`
  background: #0488a0;
  color: white;
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "16px"};
  padding: ${(props) => props.Padding || "10px"};
  margin: 0px;
  border: none;
  border-right: 1px solid white;
`;

export const WalletDiv = styled.div`
  width: 100%;
  padding: ${(props) => props.Padding || "10px"};
  background: ${(props) => props.Background || "black"};
  border-top-left-radius: ${(props) => props.TopLeft || "0px"};
  border-top-right-radius: ${(props) => props.TopRight || "0px"};
  border-bottom-left-radius: ${(props) => props.BottomLeft || "0px"};
  border-bottom-right-radius: ${(props) => props.BottomRight || "0px"};
`;

export const PlainText = styled.p`
  margin: 0px;
  padding: 2px 5px;
  font-family: "Montserrat";
  font-style: normal;
  color: ${(props) => props.Color || "balck"};
  font-weight: ${(props) => props.FontWeight || "400"};
  font-size: ${(props) => props.FontSize || "16px"};
  text-align: ${(props) => props.TextAlign || "start"};
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.Gap || "0px"};
  background: #ffffff;
  border-radius: ${(props) => props.BorderRadius || "0px"};
  padding: ${(props) => props.Padding || "0px"};
  margin: 10px 0px;
`;
