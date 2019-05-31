import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import "./index.css";
import MyLinks from "./components/MyLinks";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <div className="App ">
          <Routes />
        </div>
      </BrowserRouter>
      <MyLinks />
      <Footer />
    </React.Fragment>
  );
}

export default App;
