import { useEffect, useState } from "react";
import { FormInput } from "../Components/FormInput";
import { Link } from "react-router-dom";
import style from "./CharacterSearch.module.css"
import { useDispatch } from "react-redux";
import filterCharacter from "../redux/actions/FilterActions"

/* TODO: filter component and view */

export const CharacterSearch = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch()
  // const details = useSelector((state) => state.details)

  useEffect(() => {
    dispatch(filterCharacter(search))
  }, [dispatch, search])

  const hanldeInput = (e) => {
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
        handleChange={hanldeInput}
        placeholder={"Filter Character"}
      />
    </div>
  );
};
