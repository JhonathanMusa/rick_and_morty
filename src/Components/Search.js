import axios from "axios";
import React, { useState } from "react";
import { ResultSearch } from "./ResultSearch";

export const Search = () => {
  const [value, setValue] = useState("");
  const [datos, setDatos] = useState([]);

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${value}`
      );
      setDatos(data.results[0]);
      console.log(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    fetchData();
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
        <button className="search-btn">Search</button>
      </form>
      <ResultSearch datos={datos} />
    </div>
  );
};
