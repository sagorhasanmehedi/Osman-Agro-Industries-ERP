import React, { useState } from "react";
import { Table } from "react-bootstrap";
import DynamicInput from "../../components/forms/DynamicInput";
import DynamicTextInput from "../../components/forms/DynamicTextInput";
import SingleFormContainer from "../../components/forms/SingleFormContainer";
import { ActionEdit } from "../../components/shared/ActionButtons";
import {
  Button,
  ButtonGroupContainer,
  CardContainer,
  HeaderName,
  Input,
} from "../landingPage/LandingPageStyled";
const inputName = [
  { value: "CompanyLogo", placeHolderName: "Company Logo" },
  { value: "InvoiceHeader", placeHolderName: "Invoice Header" },
  { value: "InvoiceFooter", placeHolderName: "Invoice Footer" },
  { value: "Invoice Watermark", placeHolderName: "Invoice Watermark" },
  {
    value: "DeliveryInvoiceWatermark",
    placeHolderName: "Delivery Invoice Watermark",
  },
  {
    value: "ChallanInvoiceHeader",
    placeHolderName: "Challan Invoice Header",
  },
  {
    value: "ChallanInvoiceFooter",
    placeHolderName: "Challan Invoice Footer",
  },
  {
    value: "Currency",
    placeHolderName: "Currency",
  },
  {
    value: "CurrencyPosition",
    placeHolderName: "Currency Position",
  },
  {
    value: "TimeZone",
    placeHolderName: "Time Zone",
  },
  {
    value: "Language",
    placeHolderName: "Language",
  },
  {
    value: "DiscountType",
    placeHolderName: "Discount Type",
  },
  {
    value: "Invoice Qr-Code",
    placeHolderName: "Invoice Qr-Code",
  },
  {
    value: "AutoApproveInvoiceVoucher",
    placeHolderName: "Invoice Qr-Code",
  },
];
const CompanySettingWindow = () => {
  const [addform, setForm] = useState(false);

  return (
    <>
      <ButtonGroupContainer Gap="6px" Shadow="none" Background="none">
        <Button onClick={() => setForm(true)}>Add Company</Button>
        <Input
          type="search"
          placeholder="Invoice Search"
          Width="250px"
          style={{ marginLeft: "auto" }}
        />
        <Button>Search</Button>
      </ButtonGroupContainer>
      {addform && <AddForm setForm={setForm} />}
      {!addform && <CompanyList HeadName="Company List" setForm={setForm} />}
    </>
  );
};

export default CompanySettingWindow;

function AddForm({ setForm }) {
  const [data, setData] = useState(null);
  const handleSubmit = () => {
    setForm(false);
  };
  return (
    <SingleFormContainer
      windowHeader="Company Setting Window"
      handleSubmit={handleSubmit}
    >
      <DynamicInput
        inputName="companyLogo"
        inputType="file"
        setData={setData}
      />
      <DynamicTextInput inputName={inputName} setData={setData} />
    </SingleFormContainer>
  );
}

function CompanyList({ HeadName, setForm }) {
  const handleAction = (id, action) => {
    console.log(id, action);
    setForm(true);
  };
  return (
    <CardContainer>
      <HeaderName>{HeadName} Setting</HeaderName>
      <Table
        striped
        responsive
        bordered
        hover
        size="sm"
        style={{ background: "white" }}
      >
        <tbody>
          <tr className="tableHeader">
            <th>S.I</th>
            <th>Company Name</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Web</th>
            <th>Action</th>
          </tr>
          {Array.from({ length: 6 }).map((_, idx) => (
            <tr key={idx}>
              <td>S.I</td>
              <td>Company Name</td>
              <td>Address</td>
              <td>Mobile No</td>
              <td>Email</td>
              <td>Web</td>
              <td>
                <ActionEdit id={idx} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
