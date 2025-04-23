import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router";
import Header from "./components/common/header";
import { createBrowserRouter } from "react-router";


const root = ReactDom.createRoot(document.getElementById("root"));

export default function AppLayout() {
  return (
    <div className="app-wrapper">
      <Header />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
