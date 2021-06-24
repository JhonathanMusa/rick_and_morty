import { useState } from "react";
import { FormInput } from "../Components/FormInput";

export const CharacterSearch = () => {
  const [search, setSearch] = useState("");

  const filterCharacter = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <FormInput type={"text"} name={"search"} handleChange={filterCharacter} placeholder={"Search"} />
  );
};
