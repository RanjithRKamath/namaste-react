import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./compnents/Header";
import Body from "./compnents/Body";

const Applayout = () => {
  return(
    <div>
      <Header/>
      <Body/>
    </div>
  );
}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Applayout />);