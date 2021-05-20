import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetch_datos from "../redux/actions/SearchActions";
import styles from "./Search.module.css";

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div>
      <form className={styles.formSearch} onSubmit={submitHandle}>
        <input
          className={styles.searchInput}
          onChange={valueHandler}
          placeholder="Search..."
          value={value}
          type="text"
        />
        <button
          className={styles.searchBtn}
          onClick={() => dispatch(fetch_datos(value))}
        >
          Search
        </button>
      </form>
    </div>
  );
};
