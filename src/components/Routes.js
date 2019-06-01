import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import HomesList from "./HomesList";
import Quote from "./Quote";
import RecentListings from "./RecentListings";
import AllListings from "./AllListings";
const Routes = props => {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/allListings" component={AllListings} />
    </div>
  );
};
export default Routes;
