import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router";
import Header from "./components/common/header";
import { createBrowserRouter, Outlet } from "react-router";
import ExpendionPanel from "./components/shared/expension-panel";
import AllInOne from "./pages/allInOne";


const root = ReactDom.createRoot(document.getElementById("root"));

export default function AppLayout() {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { 
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <div className="max-w-[1920] h-vh mx-auto bg-green-100">
      <div className={`sticky top-0 bg-white md:px-6 sm:px-3 ${scrolled ? "shadow-xl shadow-green-200":""}`}>
        <Header />
      </div>
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
