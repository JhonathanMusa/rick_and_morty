import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetch_datos from "../redux/actions/SearchActions";
import { CharacterCard } from "../Components/CharacterCard";
import style from "./Search.module.css";
import filterCharacter from "../redux/actions/FilterActions";
import { FormInput } from "../Components/FormInput";

/* TODO: Update return to show the characters before search */

export const CharactersRender = (props) => {
  const [filterChar, setFilterChar] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const dataFiltered = useSelector((state) => state.filterCharacter);
  /* 
  useEffect(() => {
    dispatch(fetch_datos(page));
  }, [dispatch, page]); */

  /* useEffect(() => {}, [dispatch, filterChar]); */

  const nextPage = () => {
    let numPage = page + 1;
    setPage(numPage);
  };

  const prevPage = () => {
    let numPage = page - 1;
    setPage(numPage);
  };

  const hanldeInput = (e) => {
    setFilterChar(e.target.value);
    dispatch(filterCharacter(filterChar));
  };

  console.log(filterChar);

  return (
    <div>
      <FormInput
        type={"text"}
        name={"search"}
        handleChange={hanldeInput}
        placeholder={"Filter Character"}
      />

      {dataFiltered.loading && <div>Searching...</div>}
      {dataFiltered.characters.length >= 1 && (
        <CharacterCard search={dataFiltered} />
      )}
      {dataFiltered.error !== "" && <span>{filterCharacter.error}</span>}

      <div className={style.BtnChangePageContainer}>
        <button className={style.BtnChangePage} onClick={prevPage}>
          <i className="fas fa-angle-double-left"></i>
        </button>
        <span>{page}</span>
        <button className={style.BtnChangePage} onClick={nextPage}>
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
    </div>
  );
};
