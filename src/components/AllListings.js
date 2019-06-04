import React from "react";
import axios from "axios";
import Modal from "react-awesome-modal";

import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
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
      total: 0,
      open: false,
      modalProperty: null,
      email: "",
      message: ``,
      phone: ""
    };
  }
  componentDidMount = async () => {
    try {
      let response = await axios.get(`${url}paging/${this.state.page}`);
      let totalHomes = await axios.get(`${url}/totalCount`);
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
          class=" col-lg-4 col-sm-6  listingContainer"
          style={{ margin: "2% 0 0 0" }}
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
            <div
              style={{
                display: "flex",
                flexDirection: "wrap",
                justifyContent: "space-between"
              }}
            >
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
                <a
                  style={{ color: "blue" }}
                  onClick={() => this.setModal(home)}
                >
                  Email Agent
                </a>
              </b>
            </small>
          </div>
        </div>
      );
    });
  };
  setModal = home => {
    this.setState({ modalProperty: home, open: true });
  };
  changePage = async page => {
    try {
      let response = await axios.get(`${url}paging/${page - 1}`);
      this.setState({
        page: page,
        homes: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
  closeModal = () => {
    this.setState({ open: false });
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
            marginLeft: "2%",
            marginRight: "5%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              flexDirection: "column"
            }}
          >
            <h3 className="col-12" style={{ textAlign: "left" }}>
              <b> View our current listings</b>
            </h3>
            <h5 className="col-12" style={{ textAlign: "left" }}>
              {this.state.total} Homes
            </h5>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "gray"
              }}
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Newest Listings
              </a>
              <a className="dropdown-item" href="#">
                Lowest Price
              </a>
              <a className="dropdown-item" href="#">
                Highest Price
              </a>
              <a className="dropdown-item" href="#">
                Largest Sqft
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            showTotal={total => `Total ${total} listings`}
            defaultCurrent={this.state.page + 1}
            total={this.state.total}
            pageSize={30}
            style={{ margin: "100px" }}
            onChange={page => this.changePage(page)}
          />
        </div>
        <button onClick={() => this.setState({ open: true })}>open</button>
        <Modal
          visible={this.state.open}
          width="400"
          height="550"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <br />
            <h5>Find out more about this property</h5>
            <img
              src={
                this.state.modalProperty ? this.state.modalProperty.img : null
              }
              style={{ height: "225px", width: "300px" }}
              alt="house"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%"
              }}
            >
              <form
                className="col-10"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around"
                }}
              >
                <input
                  class="form-control"
                  type="text"
                  placeholder="Full Name"
                  style={{ marginTop: "3%" }}
                />
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email"
                  style={{ marginTop: "3%" }}
                />
                <input
                  class="form-control"
                  type="text"
                  placeholder="Phone"
                  style={{ marginTop: "3%" }}
                />
                <textarea
                  style={{ marginTop: "3%" }}
                  cols="30"
                  className="form-control"
                  placeholder={
                    !this.state.modalProperty
                      ? null
                      : `I would like more info on ${
                          this.state.modalProperty.address
                        }`
                  }
                />
                <button
                  className="form-control btn-danger"
                  style={{
                    borderRadius: "30px",
                    marginTop: "3%",
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  Email Agent
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
export default AllListings;
