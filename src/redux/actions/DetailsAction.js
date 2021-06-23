import axios from "axios";
import {
  FETCH_DETAILS_ERROR,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
} from "../constants/DetailsConstants";

const detailsDataRequest = () => {
  return {
    type: FETCH_DETAILS_REQUEST,
  };
};

const detailsDataSuccess = (character) => {
  return {
    type: FETCH_DETAILS_SUCCESS,
    payload: character,
  };
};

const detailsDataError = (error) => {
  return {
    type: FETCH_DETAILS_ERROR,
    payload: error,
  };
};

const details_data = (id) => {
  return (dispatch) => {
    dispatch(detailsDataRequest());
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        dispatch(detailsDataSuccess([response.data]));
      })
      .catch((error) => {
        dispatch(detailsDataError("Character not found"));
        console.log(error);
      });
  };
};

export default details_data;
