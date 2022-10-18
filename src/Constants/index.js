import { iconarrowdown, iconarrowup } from "../images";
import {
  clientaudiophile,
  clientdatabiz,
  clientmaker,
  clientmeet,
} from "../images";

import { icontodo, iconreminders, iconplanning, iconcalendar } from "../images";

export const menu = [
  {
    name: "Features",
    icon: iconarrowdown,
    icon2: iconarrowup,
    content: [
      {
        description: "Todo List",
        icon: icontodo,
        link: "https://www.w3schools.com",
      },
      {
        description: "Calendars",
        icon: iconcalendar,
        link: "https://www.facebook.com",
      },
      {
        description: "Reminders",
        icon: iconreminders,
        link: "https://www.messenger.com",
      },
      {
        description: "Planning",
        icon: iconplanning,
        link: "https://www.w3schools.com",
      },
    ],
  },
  {
    name: "Company",
    icon: iconarrowdown,
    icon2: iconarrowup,
    content: [
      {
        description: "History",
      },
      {
        description: "Our Team",
      },
      {
        description: "Blog",
      },
    ],
  },
  {
    name: "Careers",
    content: [],
  },
  {
    name: "About",
    content: [],
  },
];

export const buttons = [
  {
    title: "Login",
  },
  {
    title: "Register",
  },
];

export const footerimg = [
  {
    img: clientaudiophile,
  },
  {
    img: clientdatabiz,
  },
  {
    img: clientmaker,
  },
  {
    img: clientmeet,
  },
];
