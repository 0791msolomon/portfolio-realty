import { combineReducers } from "redux";
import ActiveListing from "./ActiveListing";
const rootReducer = combineReducers({
  activeListing: ActiveListing
});

export default rootReducer;
