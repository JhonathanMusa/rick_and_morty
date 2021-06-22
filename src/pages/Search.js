import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetch_datos from "../redux/actions/SearchActions";
import { CharacterCard } from "../Components/CharacterCard"
import style from "./Search.module.css"
import { FormInput } from "../Components/FormInput"

export const Search = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetch_datos(page));
  }, [dispatch, page]);

  const nextPage = () => {
    let numPage = page + 1;
    setPage(numPage)
  }

  const prevPage = () => {
    let numPage = page - 1;
    setPage(numPage)
  }

  return (
    <div>
      <h1>Characters: </h1>
      <form>
        <FormInput type={"text"}/>
      </form>
      {search.loading && <div>Searching...</div>}
      {search.characters.length >= 1 && <CharacterCard search={search} />}
      {search.error !== "" && <span>{search.error}</span>}
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
  )
};
