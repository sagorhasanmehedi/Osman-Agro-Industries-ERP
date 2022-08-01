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
        title: "New Sale",
        path: "/dashboard/sale",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Manage Sale",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Pos Sale",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Sale Report",
        path: "/reports/reports3",
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
        path: "/Product/manageproduct",
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
    title: "Accounts",
    path: "/dashboard/addaccount",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Accounts",
        path: "/dashboard/addaccount",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "All Accounts",
        path: "/reports/addaccount",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Account Type",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Account Category",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Account Area",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Location input",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
