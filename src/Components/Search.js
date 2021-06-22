import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetch_datos from "../redux/actions/SearchActions";

export const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_datos());
  }, [dispatch]);

  return <div></div>;
};
