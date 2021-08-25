import React from "react";
import ReactDOM from "react-dom";

const fname = "Bobby";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {fname}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
