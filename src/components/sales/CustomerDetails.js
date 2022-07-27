import React from "react";

const CustomerDetails = () => {
  return (
    <>
      <tr>
        <th colSpan={2}>Ac/No : </th>
        <th>Invoice No :</th>
      </tr>
      <tr>
        <th colSpan={2}>Name : </th>
        <th>Billing Date :</th>
      </tr>
      <tr>
        <th colSpan={2}>Address : </th>
        <th>Billing No :</th>
      </tr>
      <tr>
        <th colSpan={2}>Mobile : </th>
        <th>Created By :</th>
      </tr>
      <tr>
        <th colSpan={2}>Email : </th>
        <th>Status :</th>
      </tr>
    </>
  );
};

export default CustomerDetails;
