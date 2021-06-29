import { combineReducers } from "redux";
import searchReducer from "./SearchReducers";
import detailsReducer from "./DetailsReducers";
import filterReducer from "./FilterReducers";

const rootReducers = combineReducers({
  search: searchReducer,
  details: detailsReducer,
  filter: filterReducer
});

export default rootReducers;
