import UserContext from "./utils/UserContext";
import React, {Suspense, lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./compnents/Header";
import Body from "./compnents/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./compnents/AboutUs";
import Contact from "./compnents/Contact";
import Error from "./compnents/Error";
import RestaurantMenu from "./compnents/RestaurantMenu";


const Applayout = () => {
  const [username, setUserName]=useState();
  useEffect(()=>{
    /*make an API call*/
    const data={
      name: "Ranjith R Kamath",
    }
    setUserName(data.name);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{loggedInUser: username, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const Grocery=lazy(()=>{
  import("./compnents/Grocery");
});

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
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Hello</h1>}><Grocery /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);
