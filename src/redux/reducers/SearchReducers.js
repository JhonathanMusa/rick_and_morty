import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../constants/SearchConstants";

const initialState = {
  loading: false,
  characters: [],
  error: "",
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
        error: "",
      };
    case FETCH_DATA_ERROR:
      return {
        loading: false,
        characters: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default search;
