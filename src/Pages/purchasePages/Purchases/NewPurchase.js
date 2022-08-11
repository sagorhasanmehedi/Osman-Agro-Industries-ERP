import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SaleSummary from "../../../components/sales/SaleSummary";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  ContainerPosition,
  HeaderName,
  Input,
  Lavel,
  Select,
} from "../../landingPage/LandingPageStyled";
import { PlainText2 } from "../../sale/SaleStyled";

const NewPurchase = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    navigation("/purchase/purchaseInvoice");
  };

  return (
    <>
      <PlainText2>New Purchase</PlainText2>
      <CardContainer>
        <SelectCustomer />
        <CustomerDetailsForm />
        <HeaderName>Items Summary</HeaderName>
        <AddItem />
        <HeaderName>Sales Summary</HeaderName>
        <SaleSummary />
        <HeaderName>Payment Method</HeaderName>
        <PaymentMethod />
        <HeaderName>Receipt Details</HeaderName>
        <ReceiptDetails />
        <ContainerPosition Possition="end">
          <Button Padding="10px 40px" onClick={() => handleSubmit()}>
            Save
          </Button>
        </ContainerPosition>
      </CardContainer>
    </>
  );
};

export default NewPurchase;

function SelectCustomer() {
  return (
    <Row>
      <Col xs={8} sm={4}>
        <Select>
          <option>Search Customer and Select</option>
          <option>Search Customer and Select</option>
          <option>Search Customer and Select</option>
        </Select>
      </Col>
      <Col xs={4} sm={2} style={{ alignSelf: "center" }}>
        <Button>Cash Sale</Button>
      </Col>
    </Row>
  );
}

function CustomerDetailsForm() {
  return (
    <>
      <img
        src="https://images.indianexpress.com/2022/07/Nitish-kumar-8.jpeg"
        alt="image"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />

      <Row xs={1} sm={2}>
        <Col>
          <Lavel>Name</Lavel>
          <Input type="text" name="Name" />
          <Lavel>Address</Lavel>
          <Input type="text" name="Address" />
          <Lavel>Phone1</Lavel>
          <Input type="tel" name="Phone1" />
          <Lavel>Phone2</Lavel>
          <Input type="tel" name="Phone2" />
          <Lavel>Email</Lavel>
          <Input type="email" name="Email" />
        </Col>
        <Col>
          <Lavel>Previous Balance</Lavel>
          <Input type="number" name="Privious Balance" />
          <Lavel>Balance Hold</Lavel>
          <Input type="number" name="Blance Hold" />
          <Lavel>Today Transaction No</Lavel>
          <Input type="text" name="Today Transaction No" />
          <Lavel>Invoice No</Lavel>
          <Input type="text" name="Invoice No" />
          <Lavel>Billing No</Lavel>
          <Input type="text" name="Billing No" />
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Lavel>Product Order</Lavel>
          <Input
            type="text"
            name="Product Order By: Websati/Mr.Bablu-Area: Mirpur, Dhaka. "
          />
        </Col>
        <Col xs={2}>
          <Lavel>Estimate Date</Lavel>
          <Input type="text" name="Estimate Date:" />
        </Col>
        <Col xs={3}>
          <Lavel>Estimate No</Lavel>
          <Input type="text" name="Estimate No" />
        </Col>
      </Row>
    </>
  );
}

function AddItem() {
  const [values, setvalues] = useState([
    { itemName: "", avQnty: 0, Bag: 0, Qnty: 0, Unite: 0, Rate: 0, Note: "" },
  ]);

  let handleChange = (i, e) => {
    let newValues = [...values];
    newValues[i][e.target.name] = e.target.value;
    setvalues(newValues);
  };

  let addFormFields = () => {
    setvalues([
      ...values,
      { itemName: "", avQnty: 0, Bag: 0, Qnty: 0, Unite: 0, Rate: 0, Note: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newValues = [...values];
    newValues.splice(i, 1);
    setvalues(newValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(values));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ overflowX: "auto" }}>
        {values.map((element, index) => (
          <ButtonGroupContainer Gap="10px" key={index}>
            <Select
              name="itemName"
              Width="200px"
              value={element.itemName || ""}
              onChange={(e) => handleChange(index, e)}
            >
              <option>Item search and select</option>
              <option>Item search and select</option>
            </Select>

            <Input
              type="number"
              Width="150px"
              placeholder="Av.Qnty"
              name="avQnty"
              value={element.avQnty || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              Width="150px"
              placeholder="Bag"
              name="Bag"
              value={element.bag || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              placeholder="Qnty"
              Width="150px"
              name="Qnty"
              value={element.Qnty || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              placeholder="Unite"
              Width="150px"
              name="Unite"
              value={element.Unite || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <Input
              type="number"
              Width="150px"
              placeholder="Rate"
              name="Rate"
              value={element.Rate || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <Input
              type="text"
              placeholder="Note:"
              Width="300px"
              name="Note"
              value={element.Note || ""}
              onChange={(e) => handleChange(index, e)}
            />
            {index > 0 && (
              <Button onClick={() => removeFormFields(index)}>remove</Button>
            )}
          </ButtonGroupContainer>
        ))}
      </div>
      <div style={{ alignSelf: "end", marginBottom: "15px" }}>
        <Button Padding="10px 15px" onClick={() => addFormFields()}>
          Add
        </Button>
      </div>
    </div>
  );
}

function PaymentMethod() {
  return (
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Select>
          <option>Select Payment Method</option>
          <option>Cash Counter</option>
          <option>Bank Ac</option>
          <option>Mobile Banking</option>
        </Select>
      </Col>
    </Row>
  );
}

function ReceiptDetails() {
  return (
    <>
      <img
        src="https://images.indianexpress.com/2022/07/Nitish-kumar-8.jpeg"
        alt="image Preview"
        style={{ width: "300px", height: "200px" }}
      />
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Status</Lavel>
          <Select>
            <option>Select Payment Method</option>
            <option>Status 1</option>
            <option>Status 1</option>
            <option>Status 1</option>
          </Select>
        </Col>
        <Col>
          <Lavel>GoDown</Lavel>
          <Select>
            <option>Select Payment Method</option>
            <option>GoDown 1</option>
            <option>GoDown 1</option>
            <option>GoDown 1</option>
          </Select>
        </Col>
        <Col>
          <Lavel>Weight Scale</Lavel>
          <Input />
        </Col>
        <Col>
          <Lavel>Vehicles id</Lavel>
          <Input />
        </Col>
        <Col>
          <Lavel>Upload Your Document</Lavel>
          <Input type="file" placeholder="Upload your file" />
        </Col>
      </Row>
    </>
  );
}
