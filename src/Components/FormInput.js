import React from "react";
import style from "./CharacterSearch.module.css";

export const FormInput = (props) => {
  return (
    <input
      className={style.filter_input}
      name={props.name}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  );
};
