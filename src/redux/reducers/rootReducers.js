import { combineReducers } from "redux";
import search from "./SearchReducers";
import detailsReducer from "./DetailsReducers";

const rootReducers = combineReducers({
  search,
  details: detailsReducer,
});

export default rootReducers;
