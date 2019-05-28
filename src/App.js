import React from "react";
import "./App.css";
import HomesList from "./components/HomesList";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import RecentListings from "./components/RecentListings";
import "./index.css";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App ">
        <div className="headerImage">
          <div
            className="display-4"
            style={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "Optima, sans-serif"
            }}
          >
            Search 1,000 locations Nationwide
          </div>
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "Optima, sans-serif"
            }}
          >
            Find the one that's
            <i>
              <u> right for you</u>
            </i>
          </h3>
          {/* <div className="col-lg-4 col-sm-9">
          <input type="text" className="form-control" />
          <button type="submit" className="form-control">
            <i class="fa fa-search" />
          </button>
        </div> */}
          <div className="input-group col-lg-4 col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Search by state..."
            />
            <span className="input-group-btn">
              <button className="btn btn-search btn-info" type="button">
                <i className="fa fa-search fa-fw" /> Search
              </button>
            </span>
          </div>
        </div>
        <Quote />
        <RecentListings />
        <HomesList />
      </div>
    </React.Fragment>
  );
}

export default App;
