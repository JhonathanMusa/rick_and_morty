import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../constants/SearchConstants";

const fetcDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (character) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: character,
  };
};

const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

const fetch_data = (page) => {
  return (dispatch) => {
    dispatch(fetcDataRequest());
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        dispatch(fetchDataSuccess([response.data]));
      })
      .catch((error) => {
        dispatch(fetchDataError("Page not found"));
        console.log(error);
      });
  };
};

export default fetch_data;
