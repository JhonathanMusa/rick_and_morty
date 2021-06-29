import { useState } from "react";
import { FormInput } from "../Components/FormInput";
import { Link } from "react-router-dom";
import style from "./CharacterSearch.module.css"

export const CharacterSearch = () => {
  const [search, setSearch] = useState("");

  const filterCharacter = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className={style.search_container}>
      <Link className={style.title} to="/">
        <h1>Characters: </h1>
      </Link>
      <FormInput
        type={"text"}
        name={"search"}
        handleChange={filterCharacter}
        placeholder={"Filter Character"}
      />
    </div>
  );
};
