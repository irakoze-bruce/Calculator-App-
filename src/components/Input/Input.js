/** @format */

import React from "react";
import style from "./Input.module.css";
export default function Input(props) {
  return <div className={style.Input}>{props.input}</div>;
}
