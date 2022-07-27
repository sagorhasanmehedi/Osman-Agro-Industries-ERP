import React from "react";

const DeliveryItem = () => {
  return (
    <>
      <tr>
        <th>S.I</th>
        <th>Vehicle Name</th>
        <th>Item</th>
        <th>Order</th>
        <th>Delivery</th>
        <th>Pendding</th>
        <th>Unite</th>
        <th>Lot</th>
        <th>Batch no</th>
        <th>Product SI No</th>
      </tr>
      {Array.from({ length: 4 }).map((_, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>Vehicle Name</td>
          <td>Item</td>
          <td>Order</td>
          <td>50</td>
          <td>150</td>
          <td>Unite</td>
          <td>Lot</td>
          <td>Batch no</td>
          <td>Product SI No</td>
        </tr>
      ))}
    </>
  );
};

export default DeliveryItem;
