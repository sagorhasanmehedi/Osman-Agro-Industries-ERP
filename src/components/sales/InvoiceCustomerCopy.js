import React from 'react';
import SaleSummary from './SaleSummary';
import { Table } from 'react-bootstrap';

const InvoiceCustomerCopy = () => {
    return (
        <>
            <Table
                striped
                responsive
                bordered
                hover
                size="sm"
                style={{ background: "white" }}
            >
                <tbody>
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

                </tbody>
            </Table>
            <Table
                striped
                responsive
                bordered
                hover
                size="sm"
                style={{ background: "white" }}
            >
                <tbody>
                    <tr>
                        <th>S.I</th>
                        <th>Product Nmae</th>
                        <th>Quty</th>
                        <th>Unite</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>Product Nmae</td>
                            <td>Quty</td>
                            <td>Unite</td>
                            <td>Rate</td>
                            <td>Amount</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <SaleSummary />
        </>
    );
};

export default InvoiceCustomerCopy;