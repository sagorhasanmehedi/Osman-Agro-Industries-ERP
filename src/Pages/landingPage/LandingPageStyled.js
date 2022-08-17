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
  color: ${(props) => props.Color || "#1B253F"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "20px"};
  text-align: ${(props) => props.TextAlign || "start"};
  padding: ${(props) => props.Padding || "10px 0px"};
`;

export const Input = styled.input`
  font-family: "Gotham Rounded";
  border-radius: 7px;
  border: 0.5px solid #e0e0e0;
  margin: ${(props) => props.Margin || "8px 0px"};
  padding: ${(props) => props.Padding || "4px 10px"};
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
  width: ${(props) => props.Width || "100%"};
`;
export const TextAriea = styled.textarea`
  width: ${(props) => props.Width || "100%"};
  padding: ${(props) => props.Padding || "10px"};
  border: 1px solid #e0e0e0;
  font-family: "Gotham Rounded";
  border-radius: 7px;
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
`;
export const Select = styled.select`
  font-family: "Gotham Rounded";
  border-radius: 7px;
  margin: 10px 0px;
  border: 1px solid #1b253f;
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
  padding: ${(props) => props.Padding || "10px"};
  width: ${(props) => props.Width || "100%"};
`;

export const Lavel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.Color || "#1B253F"};
  ::placeholder {
    color: ${(props) => props.PlaceHolderColor || "#1B253F"};
  }
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
  box-shadow: ${(props) => props.Shadow || "0px 0px 6px rgba(0, 0, 0, 0.2)"};
`;
export const ButtonGroup = styled.button`
  background: #ffffff;
  color: rgba(40, 54, 90, 0.8);
  font-style: normal;
  border: none;
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "16px"};
  padding: ${(props) => props.Padding || "10px 25px"};
`;

export const Button = styled.button`
  background: ${(props) =>
    props.Background ||
    "linear-gradient(106.24deg, #4FBCF5 3.93%, #5B82FD 85.53%)"};
  color: ${(props) => props.Color || "white"};
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "16px"};
  padding: ${(props) => props.Padding || "8px 20px"};
  margin: ${(props) => props.Margin || "0px"};
  border-radius: ${(props) => props.BorderRadius || "4px"};
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
