import styled from "styled-components";

export const WalletDiv = styled.div`
  width: 100%;
  padding: ${(props) => props.Padding || "10px"};
  background: ${(props) => props.Background || "black"};
  border-top-left-radius: ${(props) => props.TopLeft || "0px"};
  border-top-right-radius: ${(props) => props.TopRight || "0px"};
  border-bottom-left-radius: ${(props) => props.BottomLeft || "0px"};
  border-bottom-right-radius: ${(props) => props.BottomRight || "0px"};
`;

export const CardContainer = styled.div`
  border-radius: 10px;
  margin-top: 20px;
  background: white;
  padding: ${(props) => props.Padding || "20px"};
  width: ${(props) => props.Width || "100%"};
  box-shadow: ${(props) => props.Shadow || "0px 4px 8px rgba(0, 0, 0, 0.16)"};
`;

export const PlainText = styled.p`
  margin: 0px;
  padding: 2px 5px;
  font-family: "Montserrat";
  font-style: normal;
  color: ${(props) => props.Color || "balck"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "16px"};
  text-align: ${(props) => props.TextAlign || "start"};
  border: ${(props) => props.Border || "none"};
  padding: ${(props) => props.Padding || "0px"};
`;

export const HeaderName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  color: ${(props) => props.Color || "#0488a0"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "20px"};
  text-align: ${(props) => props.TextAlign || "start"};
  padding: ${(props) => props.Padding || "10px 0px"};
`;

export const Input = styled.input`
  font-family: "Gotham Rounded";
  border-radius: 7px;
  border: 1px solid #e0e0e0;
  margin: ${(props) => props.Margin || "10px 0px"};
  padding: ${(props) => props.Padding || "4px 10px"};
  color: ${(props) => props.Color || "#0488a0"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#0488a0"};
  }
  width: ${(props) => props.Width || "100%"};
`;
export const TextAriea = styled.textarea`
  width: ${(props) => props.Width || "100%"};
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
  font-family: "Gotham Rounded";
  border-radius: 7px;
  margin: 10px 0px;
  border: 1px solid #e0e0e0;
  color: ${(props) => props.Color || "#0488a0"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#0488a0"};
  }
  padding: ${(props) => props.Padding || "10px"};
  width: ${(props) => props.Width || "100%"};
`;

export const Lavel = styled.label`
  font-family: "Gotham Rounded";
  font-size: ${(props) => props.FontSize || "16px"};
  font-weight: ${(props) => props.FontWeight || "600"};
  color: ${(props) => props.Color || "#0488a0"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#0488a0"};
  }
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.Possition || "start"};
  margin: ${(props) => props.Margin || "10px 0px"};
  padding: ${(props) => props.Padding || "0px 5px"};
  gap: ${(props) => props.Gap || "0px"};
  background: ${(props) => props.Background || "white"};
  border-radius: ${(props) => props.BorderRadius || "10px"};
  box-shadow: ${(props) => props.Shadow || "0px 4px 8px rgba(0, 0, 0, 0.16)"};
`;
export const ButtonGroup = styled.button`
  background: #0488a0;
  color: white;
  font-family: "Gotham Rounded";
  font-style: normal;
  border: none;
  border-right: 1px solid white;
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "16px"};
  padding: ${(props) => props.Padding || "10px"};
`;

export const Button = styled.button`
  background: ${(props) => props.Background || "#0488a0"};
  color: ${(props) => props.Color || "white"};
  font-family: "Gotham Rounded";
  font-style: normal;
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "16px"};
  padding: ${(props) => props.Padding || "10px 20px"};
  margin: ${(props) => props.Margin || "0px"};
  border-radius: ${(props) => props.BorderRadius || "8px"};
  border: none;
`;

export const ContainerPosition = styled.div`
  display: flex;
  justify-content: ${(props) => props.Possition || "end"};
  align-items: center;
  margin: ${(props) => props.Margin || "0px"};
  gap: ${(props) => props.Gap || "0px"};
`;

export const InvoiceBody = styled.div`
  min-height: 81vh;
  padding: 10px 20px;
`;
