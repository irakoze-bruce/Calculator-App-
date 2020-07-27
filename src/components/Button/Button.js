/** @format */

// /** @format */

// import React from "react";
// //import style from "../Button/Button.module.css";
// import "./Button.css";

// const isOperator = (val) => {
//   return !isNaN(val) || val === "." || val === "=";
// };

// const Button = (props) => (
//   <div
//     className={`Button ${isOperator(props.children) ? null : "operator"}`}
//     onClick={() => props.handleClick(props.children)}
//   >
//     {props.children}
//   </div>
// );

// export default Button;

import React from "react";
import "./Button.css";

let isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

const Button = (props) => (
  <div
    className={`Button ${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
