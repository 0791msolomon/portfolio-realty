import React from "react";
import logo from "./photos/logo.png";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a
        class="navbar-brand"
        href="https://matthew-s-portfolio-landing.herokuapp.com"
        target="_blank"
      >
        <img
          src={logo}
          width="30"
          height="30"
          class="d-inline-block align-top"
          style={{ borderRadius: "25%" }}
          alt="redirect to landing page"
        />
      </a>
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
            Realty Page
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
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
{
  /**/
}
