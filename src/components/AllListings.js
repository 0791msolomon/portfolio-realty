import React from "react";
import axios from "axios";
const url =
  process.env.REACT_APP_BASEURL || "http://localhost:5000/api/realty/";
class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: null,
      maxPrice: null,
      updated: false,
      homes: [],
      page: 0,
      total: 0
    };
  }
  componentDidMount = async () => {
    try {
      let response = await axios.get(`${url}paging/${this.state.page}`);
      let totalHomes = await axios.get(`${url}/totalCount`);
      console.log(totalHomes);
      this.setState({
        homes: response.data,
        updated: true,
        total: totalHomes.data.response
      });
    } catch (err) {
      console.log(err);
    }
  };
  renderHomes = () => {
    return this.state.homes.map(home => {
      console.log(home.address.slice(home.address.length - 1, -6));
      let bedrooms;
      let bathrooms;
      if (home.rooms < home.baths) {
        bedrooms = home.baths;
        bathrooms = home.rooms;
      } else {
        bedrooms = home.rooms;
        bathrooms = home.baths;
      }
      let priceArr = home.price.split("");
      priceArr.splice(4, 0, ",");
      priceArr.join("");
      return (
        <div
          class=" col-lg-4 col-sm-6  "
          style={{ padding: "2%" }}
          key={home._id}
        >
          <small style={{ float: "left" }}>
            {"Brokered by <Realty company name here>"}
          </small>
          <div className="picContainer">
            <img
              class="pic"
              src={home.img}
              style={{ width: "100%", height: "300px" }}
              alt="Card image cap"
            />
            <div className="picText">
              <small>
                <b> House for sale</b>
              </small>
              <span>{priceArr}</span>
              <small style={{ fontWeight: "bold" }}>{home.address}</small>
            </div>
          </div>
          <div
            className="container"
            style={{
              width: "100%",
              border: "solid 1px black",
              borderTop: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <div style={{ display: "flex", flexDirection: "wrap" }}>
              <small>
                <b>{bedrooms}</b> Beds &nbsp;
              </small>
              <small>
                <b>{bathrooms}</b> Baths &nbsp;{" "}
              </small>
              <small>
                <b>{home.footage}</b> sqft
              </small>
            </div>
            <small style={{ textAlign: "left" }}>{home.address}</small>
            <small>
              <b>
                <a href="/">Email Agent</a>
              </b>
            </small>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            minHeight: "75px",
            height: "auto",
            borderTop: "solid white 3px",
            borderBottom: "solid white 3px",
            // backgroundColor: "lightgray",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <div class="dropdown col-lg-2 col-sm-12 ">
            <button
              style={{ backgroundColor: "transparent", color: "black" }}
              class="btn btn-dark dropdown-toggle form-control"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Price range
            </button>
            <div className="dropdown-menu col-12">
              <form
                className="dropdown-item col-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap"
                }}
              >
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$Min"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$Max"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="dropdown col-lg-2 col-sm-12">
            <button
              style={{ backgroundColor: "transparent", color: "black" }}
              class="btn btn-dark dropdown-toggle form-control"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Beds
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <div class="dropdown col-lg-2 col-sm-12">
            <button
              style={{ backgroundColor: "transparent", color: "black" }}
              class="btn btn-dark dropdown-toggle form-control"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Baths
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <div class="dropdown col-lg-2 col-sm-12">
            <button
              style={{ backgroundColor: "transparent", color: "black" }}
              class="btn btn-dark dropdown-toggle form-control"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Square Footage
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
            </div>
          </div>
        </div>
        <h3 className="col-10" style={{ textAlign: "left" }}>
          View our current listings
        </h3>
        <h5 className="col-10" style={{ textAlign: "left" }}>
          {this.state.total} Homes
        </h5>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {this.state.updated ? this.renderHomes() : null}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example" style={{ maxWidth: "75%" }}>
            <ul className="pagination" max-size="10">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default AllListings;
