import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Sale",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Manage Sale",
        path: "/dashboard/sale",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Sale Report",
        path: "/dashboard/salereport",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Product",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Manage Product",
        path: "/product/manageproduct",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Brand",
        path: "/product/brand",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Category",
        path: "/product/category",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Unite",
        path: "/product/unite",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Purchase",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "New Purchase",
        path: "/purchase/newpurchase",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manage Purchase",
        path: "/purchase/managepurchase",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Pos Purchase",
        path: "/purchase/purchsewindow",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Purchase Report",
        path: "/purchase/purchasereport",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Production",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Production",
        path: "/production/production",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Production Type",
        path: "/production/productiontype",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Stock",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Stock Report",
        path: "/stock/stockreport",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Stock Tranfer",
        path: "/stock/stocktransfer",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Warehouse",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Wirehouse",
        path: "/warehouse/wirehousewindow",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Delivery",
        path: "/warehouse/delivery",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Pending Delivery",
        path: "/warehouse/pendingdelivery",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Receipt Window",
        path: "/warehouse/receipt",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Pending Receipt",
        path: "/warehouse/pendingreceipt",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Vehicles Window",
        path: "/warehouse/vehicles",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Accounts",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Accounts",
        path: "/accounts/addaccount",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "All Accounts",
        path: "/accounts/allaccounts",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Account Type",
        path: "/accounts/accounttype",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Account Category",
        path: "/accounts/category",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Account Area",
        path: "/accounts/area",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Location",
        path: "/accounts/location",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Report",
    path: "#",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Cash Book",
        path: "/report/cashbook",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Inventory Ledger",
        path: "/report/inventoryledger",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Bank Book",
        path: "/report/bankbook",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
