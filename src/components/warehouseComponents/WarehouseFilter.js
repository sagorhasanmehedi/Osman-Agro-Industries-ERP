import {
  Button,
  ButtonGroupContainer,
  Input,
} from "../../Pages/landingPage/LandingPageStyled";

const WarehouseFilter = () => {
  return (
    <ButtonGroupContainer Gap="6px">
      <Input type="date" placeholder="Invoice Search" Width="150px" />
      <Input type="date" placeholder="Invoice Search" Width="150px" />

      <Button Padding="10px 40px" style={{ marginLeft: "auto" }}>
        Search
      </Button>
    </ButtonGroupContainer>
  );
};

export default WarehouseFilter;
