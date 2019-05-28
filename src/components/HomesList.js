import React from "react";
import "./index.css";
const axios = require("axios");
const url = process.env.REACT_APP_BASEURL || "http://localhost:5000/api/realty";
class HomesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { homes: [] };
  }
  componentDidMount = async () => {
    try {
      let response = await axios.get(url);
      this.setState({ homes: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  renderHomes = () => {
    console.log(this.state.homes.length);
    return this.state.homes.map(item => {
      return (
        <div
          key={item._id}
          style={{ marginTop: "2%" }}
          className="col-lg-4 col-sm-6"
        >
          <img
            src={item.img}
            style={{ height: "100%", width: "100%" }}
            className="homeImage"
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="col-12"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {this.state.homes.length > 0 ? this.renderHomes() : null}{" "}
      </div>
    );
  }
}
export default HomesList;
