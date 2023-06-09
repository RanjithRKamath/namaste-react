import React from "react";
import ReactDOM from "react-dom/client";

const result = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1", key:"child1" },
    [React.createElement("h1", {key:"h1"}, "this is h1h1 tag"),
    React.createElement("h2", {key:"h2"}, "this is h2 tag")]
  ), React.createElement(
    "div",
    { id: "child2", key:"child2" },
    [React.createElement("h3", {key:"h31"}, "this is h3 tag"),
    React.createElement("h4", {key:"h4"}, "this is h4 tag")]
  )]
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(result);
