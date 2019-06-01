import React from "react";
import axios from "axios";
const url = process.env.REACT_APP_BASEURL || "http://localhost:5000/api/realty";
class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minPrice: null, maxPrice: null };
  }
  componentDidMount = async () => {
    try {
      let response = await axios.get(url);
      console.log(response.data.length);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div
        style={{
          minHeight: "75px",
          height: "auto",
          borderTop: "solid white 3px",
          borderBottom: "solid white 3px",
          backgroundColor: "lightgray",
          display: "flex",
          alignItems: "center"
        }}
      >
        ace
      </div>
    );
  }
}
export default AllListings;
