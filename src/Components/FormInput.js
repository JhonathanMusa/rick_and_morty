import React from "react";
import style from "./CharacterSearch.module.css";

export const FormInput = (props) => {
  const { name, handleChange, placeholder, type, value } = props;
  return (
    <input
      className={style.filter_input}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};
