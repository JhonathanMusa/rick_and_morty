import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetch_datos from "../redux/actions/SearchActions";

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
      <form onSubmit={submitHandle}>
        <input
          className="search-input"
          onChange={valueHandler}
          placeholder="Search..."
          value={value}
          type="text"
        />
        <button
          className="search-btn"
          onClick={() => dispatch(fetch_datos(value))}
        >
          Search
        </button>
      </form>
    </div>
  );
};
