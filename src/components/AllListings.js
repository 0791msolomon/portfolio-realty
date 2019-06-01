import React from "react";
import axios from "axios";
const url =
  process.env.REACT_APP_BASEURL || "http://localhost:5000/api/realty/chunks";
class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minPrice: null, maxPrice: null, updated: false, homes: [] };
  }
  componentDidMount = async () => {
    try {
      let response = await axios.get(url);
      this.setState({ homes: response.data, updated: true });
      console.log(response.data.length);
    } catch (err) {
      console.log(err);
    }
  };
  renderHomes = () => {
    return this.state.homes.map(home => {
      let priceArr = home.price.split("");
      priceArr.splice(4, 0, ",");
      priceArr.join("");
      return (
        <div class=" col-lg-4 col-sm-6 picContainer" style={{ padding: "2%" }}>
          <img
            class="pic"
            src={home.img}
            style={{ width: "100%", height: "300px" }}
            alt="Card image cap"
          />
          <div className="picText">
            <small>House for sale</small>
            <span>{priceArr}</span>
            <small style={{ fontWeight: "bold" }}>{home.address}</small>
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
      </React.Fragment>
    );
  }
}
export default AllListings;
