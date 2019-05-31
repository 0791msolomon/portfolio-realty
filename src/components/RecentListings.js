import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const axios = require("axios");
const url = process.env.REACT_APP_BASEURL || "http://localhost:5000/api/realty";
class RecentListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { homes: [], allHomes: [], updated: false };
  }
  componentDidMount = async () => {
    try {
      let recent = await axios.get(`${url}/recentListings`);
      let all = await axios.get(url);
      this.setState({
        homes: recent.data,
        allHomes: all.data,
        updated: true
      });
    } catch (err) {
      console.log(err);
    }
  };
  renderHomes = () => {
    return this.state.homes.map(item => {
      let priceArr = item.price.split("");
      priceArr.splice(4, 0, ",");
      priceArr.join("");
      return (
        <div
          className="col-lg-2 col-md-6 col-sm-12 picContainer"
          key={item._id}
        >
          <img
            className="pic"
            src={item.img}
            style={{ height: "100%", width: "100%" }}
          />
          <div className="picText">
            <span>{priceArr}</span>
            <small style={{ fontWeight: "bold" }}>
              {item.address.substring(0, 25)}...
            </small>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="col-12"
        style={{
          paddingTop: "3%",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "solid 3px lightgray",
          backgroundColor: "#E4E3E3"
        }}
      >
        <span>
          <h5 style={{ fontFamily: "Palatino, URW Palladio L, serif" }}>
            Get the freshest new
          </h5>
          <h3 style={{ fontFamily: "Palatino, URW Palladio L, serif" }}>
            <i> Listings</i>
          </h3>
        </span>
        <div
          className="col-12"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {this.state.updated ? this.renderHomes() : null}
        </div>

        <div
          className="col-lg-3 col-sm-10"
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          <button className="btn form-control viewListings">
            View our 100 newest Listings
          </button>
        </div>
        <div
          className="col-lg-9 col-sm-12"
          style={{
            marginBottom: "3%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <Link className="col-lg-3 col-sm-12">
            <h3>
              {this.state.allHomes.length}
              <span style={{ color: "black" }}>All Listings</span>
            </h3>
          </Link>
          <Link className="col-lg-3 col-sm-12">
            <h3>
              7 <span style={{ color: "black" }}>Open Houses</span>
            </h3>
          </Link>
          <Link className="col-lg-3 col-sm-12">
            <h3>
              114 <span style={{ color: "black" }}>Recently Sold</span>
            </h3>
          </Link>
          <Link className="col-lg-3 col-sm-12">
            <h3>
              46 <span style={{ color: "black" }}>Price Reduced</span>
            </h3>
          </Link>
        </div>
      </div>
    );
  }
}
export default RecentListings;
