import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./compnents/Header";
import Body from "./compnents/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./compnents/AboutUs";
import Contact from "./compnents/Contact";
import Error from "./compnents/Error";
import RestaurantMenu from "./compnents/RestaurantMenu";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);
