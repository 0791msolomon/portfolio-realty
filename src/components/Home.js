import React from "react";
import HomesList from "./HomesList";
import Quote from "./Quote";
import RecentListings from "./RecentListings";
import "./index.css";
import TypeAhead from "./TypeAhead";
import { connect } from "react-redux";
import { selectHome } from "../actions";
import { withRouter } from "react-router-dom";
import Link from "./Link";
import LogIn from "./LogIn";
import InfiniteCarousel from "react-leaf-carousel";
const axios = require("axios");
const url = process.env.REACT_APP_BASEURL || "http://localhost:5000";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { updated: false, properties: [], search: "", sss: "" };
  }
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    try {
      let response = await axios.get(`${url}/api/realty/chunks`);
      this.setState({ updated: true, properties: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  viewHome = async home => {
    await this.props.selectHome(home);
    this.props.history.push(`/listing/${home._id}`);
  };
  renderProperties = () => {
    return this.state.properties.map(item => {
      let priceArr = item.price.split("");
      priceArr.splice(4, 0, ",");
      priceArr.join("");
      return (
        <div
          key={item._id}
          className="picContainer"
          onClick={() => this.viewHome(item)}
        >
          <img
            className="pic"
            src={item.img}
            style={{ height: "200px", width: "400px" }}
          />
          <div className="picText">
            <span>{priceArr}</span>
            <small style={{ fontWeight: "bold" }}>
              {item.address.substring(0, 15)}...
            </small>
          </div>
        </div>
      );
    });
  };
  selectState = state => {
    if (state.length > 0) {
      console.log(state[0].slice(state[0].length - 2, state[0].length));
    }
  };
  render() {
    if (!this.props.loggedIn) {
      return <LogIn />;
    }
    return (
      <React.Fragment>
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
          <TypeAhead change={state => this.selectState(state)} />
        </div>
        <Quote
          min="100px"
          quote={
            "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know it when you find it"
          }
          speaker={"Steve Jobs"}
        />
        <RecentListings />
        {/* <HomesList /> */}
        <div className="peopleHelping">
          <div className="picText">
            <div
              className="display-3"
              style={{ fontFamily: "Optima, sans-serif" }}
            >
              Trust
            </div>
            <div
              className="display-3"
              style={{ fontFamily: "Optima, sans-serif" }}
            >
              Realtors
            </div>
            <h1
              className="display-4"
              style={{ fontStyle: "oblique", fontFamily: "serif" }}
            >
              <i>
                {" "}
                <u> here to help</u>
              </i>
            </h1>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              <br />
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolo <br />r in reprehenderit in voluptate velit esse cillum{" "}
              <br />
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "solid 3px lightgray"
          }}
        >
          <h3 style={{ fontFamily: "Times, Times New Roman, serif" }}>
            Check out some of our other listings
          </h3>
        </div>
        <div style={{ backgroundColor: "lightgray" }}>
          {this.state.updated ? (
            <InfiniteCarousel
              breakpoints={[
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                }
              ]}
              arrows={true}
              dots={false}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={1}
              slidesToShow={5}
              scrollOnDevice={true}
            >
              {this.renderProperties()}
            </InfiniteCarousel>
          ) : null}
        </div>
        <Link />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ loggedIn }) => {
  return {
    loggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { selectHome }
  )(Home)
);
