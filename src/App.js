import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import "./index.css";
import MyLinks from "./components/MyLinks";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";
import { connect } from "react-redux";
class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar />{" "}
          <div className="App ">
            <Routes />
          </div>
        </BrowserRouter>
        <FooterLinks />
        <MyLinks />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
