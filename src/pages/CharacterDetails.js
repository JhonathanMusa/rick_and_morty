import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import details_data from "../redux/actions/DetailsAction";
import { DetailsCard } from "../Components/DetailsCard";
import { useParams } from "react-router-dom";

export const CharacterDetails = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const data = details.characters[0];

  useEffect(() => {
    dispatch(details_data(id));
  }, [dispatch, id]);

  return (
    <div>
      {details.loading && <div>Searching...</div>}
      {details.characters.length >= 1 && <DetailsCard details={data} />}
      {details.error !== "" && <span>{details.error}</span>}
    </div>
  );
};
