import React from "react";
import "./App.css";
import HomesList from "./components/HomesList";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import RecentListings from "./components/RecentListings";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import "./index.css";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <div className="App ">
          <Routes />
        </div>{" "}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
