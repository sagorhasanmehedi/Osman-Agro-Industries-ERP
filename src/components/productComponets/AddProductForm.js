import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerCenter,
  Input,
  Lavel,
  Select,
} from "../../Pages/landingPage/LandingPageStyled";

const AddProductForm = () => {
  return (
    <CardContainer>
      <Row xs={1} sm={2} md={3}>
        <Col>
          <Lavel>Barcode/ QR-code</Lavel>
          <Input name="barCode" />
        </Col>
        <Col>
          <Lavel>Product Name</Lavel>
          <Input name="barCode" />
        </Col>
        <Col>
          <Lavel>Brand</Lavel>
          <Select>
            {[1, 3, 5].map((value, index) => (
              <option key={index}>brand name</option>
            ))}
          </Select>
        </Col>
        <Col>
          <Lavel>Prodeuct Model</Lavel>
          <Input name="productModel" />
        </Col>
        <Col>
          <Lavel>Product Category</Lavel>
          <Select>
            {[1, 3, 5].map((value, index) => (
              <option key={index}>Product Category</option>
            ))}
          </Select>
        </Col>
        <Col>
          <Lavel>Unite</Lavel>
          <Select>
            {[1, 3, 5].map((value, index) => (
              <option key={index}>Unite</option>
            ))}
          </Select>
        </Col>
        <Col>
          <Lavel>Khat Account</Lavel>
          <Input name="khatAccout" />
        </Col>
        <Col>
          <Lavel>Lot/Gallery</Lavel>
          <Input name="lot" />
        </Col>
        <Col>
          <Lavel>Batch No</Lavel>
          <Input name="batchNo" />
        </Col>
        <Col>
          <Lavel>Product Serial No</Lavel>
          <Input name="productSetialNo" />
        </Col>
        <Col>
          <Lavel>Supplier Price</Lavel>
          <Input name="supplierPrice" />
        </Col>
        <Col>
          <Lavel>Our Price</Lavel>
          <Input name="ourPrice" />
        </Col>
      </Row>
      <ContainerCenter Possition="end">
        <Button Padding="10px 50px">Save</Button>
      </ContainerCenter>
    </CardContainer>
  );
};

export default AddProductForm;
