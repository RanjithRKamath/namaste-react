import React from "react";
import ReactDOM from "react-dom/client";

const elem="Element";

const Title = ()=>{
  return (<div>
    <h1>{elem}</h1>
    <h1>Title</h1>
    </div>);
  }

const Heading =()=>{
    return (<div>
    <Title/>
    <h1>Heading</h1>
    </div>);
}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Heading />);