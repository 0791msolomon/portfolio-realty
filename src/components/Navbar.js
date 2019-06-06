import React from "react";
import logo from "./photos/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = props => {
  console.log("this one", props.favorites);
  let arr = [];
  if (props.favorites.length > 0) {
    arr = [...new Set(props.favorites)];
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        <img
          src={logo}
          width="30"
          height="30"
          class="d-inline-block align-top"
          style={{ borderRadius: "25%" }}
          alt="redirect to landing page"
        />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link class="navbar-brand" to="/">
          <span
            style={{ fontFamily: "Optima, sans-serif", fontWeight: "bold" }}
          >
            Mock Realty
          </span>
        </Link>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item  ">
            <a class="nav-link" href="#">
              Buy
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sell
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  " href="#">
              Rent
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link  " href="#">
              {arr.length > 0 ? `Favorites (${arr.length})` : "Favorites (0)"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ favorites }) => {
  return {
    favorites
  };
};
export default connect(mapStateToProps)(Navbar);
