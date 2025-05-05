import React, { Children } from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router";
import Header from "./components/common/header";
import { createBrowserRouter, Outlet } from "react-router";
import ExpendionPanel from "./components/shared/expension-panel";
import AllInOne from "./pages/allInOne";


const root = ReactDom.createRoot(document.getElementById("root"));

export default function AppLayout() {
  return (
    <div className="app-wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <ExpendionPanel />
      },
      {
        path: 'all-in-one',
        element: <AllInOne />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
