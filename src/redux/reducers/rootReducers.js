import { combineReducers } from "redux";
import searchReducer from "./SearchReducers";
import detailsReducer from "./DetailsReducers";
import filterReducer from "./FilterReducers";

const rootReducers = combineReducers({
  search: searchReducer,
  details: detailsReducer,
<<<<<<< HEAD
  filterCharacter: filterReducer
=======
  filter: filterReducer
>>>>>>> b39e043e0c64d93419e4a37532d5ea9c3ff05dcd
});

export default rootReducers;
