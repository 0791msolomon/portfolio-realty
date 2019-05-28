import React from "react";
import "./index.css";
const axios = require("axios");
const url = process.env.REACT_APP_BASEURL || "http://localhost:5000/api/realty";
class RecentListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { homes: [], updated: false };
  }
  componentDidMount = () => {
    axios
      .get(`${url}/recentListings`)
      .then(res => {
        this.setState({
          homes: res.data,
          updated: true
        });
      })
      .catch(err => {
        console.log(err);
      });
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
      </div>
    );
  }
}
export default RecentListings;
