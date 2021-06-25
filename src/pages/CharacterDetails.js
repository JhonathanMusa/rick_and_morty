import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import details_data from "../redux/actions/DetailsAction";
import { DetailsCard } from "../Components/DetailsCard";
import { useParams } from "react-router-dom";
import style from "../Components/Details.module.css";

export const CharacterDetails = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const data = details.characters[0];

  useEffect(() => {
    dispatch(details_data(id));
  }, [dispatch, id]);

  const backHandle = () => {
    window.history.back();
  };

  return (
    <div>
      {details.loading && <div>Searching...</div>}
      {details.characters.length >= 1 && <DetailsCard details={data} />}
      {details.error !== "" && <span>{details.error}</span>}
      <button className={style.btnBack} onClick={backHandle}>
        <i className="fas fa-angle-double-left"></i>
      </button>
    </div>
  );
};
