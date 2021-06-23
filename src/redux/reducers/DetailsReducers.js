import {
  FETCH_DETAILS_ERROR,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
} from "../constants/DetailsConstants";

const initialState = {
  loading: false,
  characters: [],
  error: "",
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
        error: "",
      };
    case FETCH_DETAILS_ERROR:
      return {
        loading: false,
        characters: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default detailsReducer;
