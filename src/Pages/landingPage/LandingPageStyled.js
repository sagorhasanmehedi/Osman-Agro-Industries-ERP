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
  margin: ${(props) => props.Margin || "20px 0px 0px 0px"};
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
  font-family: "Poppins";
  font-style: normal;
  color: ${(props) => props.Color || "#1B253F"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "20px"};
  text-align: ${(props) => props.TextAlign || "start"};
  padding: ${(props) => props.Padding || "10px 0px"};
`;

export const Input = styled.input`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  border: 0.5px solid #ecd0c9;
  border-radius: 4px;
  margin: ${(props) => props.Margin || "8px 0px"};
  padding: ${(props) => props.Padding || "6px 8px"};
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
  width: ${(props) => props.Width || "100%"};
`;
export const TextAriea = styled.textarea`
  width: ${(props) => props.Width || "100%"};
  padding: ${(props) => props.Padding || "10px"};
  border: 0.5px solid #ecd0c9;
  border-radius: 4px;
  font-family: "Poppins";
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
`;
export const Select = styled.select`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  border: 0.5px solid #ecd0c9;
  border-radius: 4px;
  margin: ${(props) => props.Margin || "8px 0px"};
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
  padding: ${(props) => props.Padding || "6px 8px"};
  width: ${(props) => props.Width || "100%"};
`;

export const Lavel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
`;

export const PlainHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.Possition || "start"};
  margin: ${(props) => props.Margin || "0px"};
  padding: ${(props) => props.Padding || "0px 5px"};
  gap: ${(props) => props.Gap || "0px"};
`;

export const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.Possition || "start"};
  margin: ${(props) => props.Margin || "0px"};
  padding: ${(props) => props.Padding || "0px 5px"};
  gap: ${(props) => props.Gap || "0px"};
  background: ${(props) => props.Background || "#FFFFFF"};
  box-shadow: ${(props) => props.Shadow || "0px 0px 2px rgba(0, 0, 0, 0.25)"};
  border-radius: ${(props) => props.Radius || "0px"};
`;

export const ButtonGroup = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: black;
  border: none;
  border-right: 1px solid white;
  background: white;
  padding: ${(props) => props.Padding || "12px 40px"};
`;

export const Button = styled.button`
  font-family: "Poppins";
  font-style: normal;
  border: none;
  color: ${(props) => props.Color || "white"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "13px"};
  padding: ${(props) => props.Padding || "8px 20px"};
  margin: ${(props) => props.Margin || "0px"};
  border-radius: ${(props) => props.BorderRadius || "4px"};
  background: ${(props) => props.Background || "#54D487"};
`;

export const ContainerPosition = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.Possition || "end"};
  align-items: center;
  margin: ${(props) => props.Margin || "0px"};
  gap: ${(props) => props.Gap || "0px"};
`;

export const InvoiceNav = styled.div`
  width: 840px;
  margin: auto;
  margin-top: 40px;
`;
export const InvoiceBody = styled.div`
  min-height: 81vh;
  padding: 10px 20px;
`;
