import axios from "axios";
import React, { useState } from "react";

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
      setDatos(data.results[0].name);
      console.log(data.results);
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
          onChange={valueHandler}
          type="text"
          value={value}
          placeholder="Search..."
        />
        <button>Search</button>
      </form>
      <p>{datos}</p>
    </div>
  );
};
