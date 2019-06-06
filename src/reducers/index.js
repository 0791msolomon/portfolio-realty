import { combineReducers } from "redux";
import ActiveListing from "./ActiveListing";
import favorites from "./favorites";
const rootReducer = combineReducers({
  activeListing: ActiveListing,
  favorites
});

export default rootReducer;
