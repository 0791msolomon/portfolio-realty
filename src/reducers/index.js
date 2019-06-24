import { combineReducers } from "redux";
import ActiveListing from "./ActiveListing";
import favorites from "./favorites";
import loggedIn from "./Login";
const rootReducer = combineReducers({
  activeListing: ActiveListing,
  favorites,
  loggedIn
});

export default rootReducer;
