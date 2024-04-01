import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LogIn from "./pages/LogIn/LogIn";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Vendors from "./pages/Vendors/Vendors";
import Contacts from "./pages/Contacts/Contacts";
import AddContact from "./pages/AddContact/AddContact";

const router = createBrowserRouter([
  {
    path: "/vendors",
    element: <Vendors />,
  },
  {
    path: "/vendor-contact",
    element: <Contacts />,
  },
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/add-contact",
    element: <AddContact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
