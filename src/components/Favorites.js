import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Modal from "react-awesome-modal";
import { EmailInput, NameInput } from "./ContactInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const validator = require("email-validator");

const url = process.env.REACT_APP_BASEURL || "http://localhost:5000";
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
      page: 0,
      total: 0,
      open: false,
      modalProperty: null,
      email: "",
      message: ``,
      name: "",
      errors: {}
    };
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
    console.log(this.props.favorites);
    let houseArr = [];
    let promiseArr = this.props.favorites.map(item => {
      return axios.get(`${url}/api/realty/home/${item}`).then(response => {
        houseArr.push(response.data);
      });
    });
    Promise.all(promiseArr)
      .then(res => {
        this.setState({ homes: houseArr });
      })
      .catch(err => {
        console.log(err);
      });
  };

  viewHome = async home => {
    await this.props.selectHome(home);
    this.props.history.push(`/listing/${home._id}`);
  };
  setModal = home => {
    this.setState({ modalProperty: home, open: true });
  };
  closeModal = () => {
    this.setState({
      open: false,
      email: "",
      name: "",
      phone: null,
      errors: {}
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  sendEmail = e => {
    e.preventDefault();
    let { phone, email, name } = this.state;
    if (name.trim().length === 0) {
      return this.setState({
        errors: { name: "You must enter a name" }
      });
    }
    if (email.trim() === "" || !validator.validate(email)) {
      return this.setState({
        errors: { email: "Please enter valid Email" }
      });
    }
    axios
      .post(`${url}/api/contactForm`, {
        company: this.state.email,
        name: this.state.name
      })
      .then(res => {
        this.setState({ email: "", name: "", open: false });
        return toast.info("Request sent", {
          position: "top-right",
          autoClose: 2300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      })
      .catch(err => {
        console.log(err);
        return toast.error("Try again later", {
          position: "top-right",
          autoClose: 2300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      });
    this.setState({
      errors: {}
    });
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
          <div className="picContainer" onClick={() => this.viewHome(home)}>
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

  render() {
    return (
      <React.Fragment>
        <h1 style={{ float: "left" }}>favorites</h1>
        <ToastContainer
          position="top-right"
          autoClose={1900}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
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
          {this.state.homes.length > 0 ? this.renderHomes() : null}
        </div>

        <Modal
          visible={this.state.open}
          width="400"
          height="550"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <br />
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-around"
              }}
            >
              <h5>Find out more about this property</h5>
              <p onClick={this.closeModal} className="closeModal">
                <b> x</b>
              </p>
            </span>
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
                onSubmit={this.sendEmail}
                className="col-10"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around"
                }}
              >
                <NameInput
                  value={this.state.name}
                  onChange={value => this.onChange(value)}
                  error={this.state.errors.name}
                />
                <EmailInput
                  value={this.state.email}
                  onChange={value => this.onChange(value)}
                  error={this.state.errors.email}
                />
                <div>
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
                </div>
                <button
                  onClick={this.sendEmail}
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
const mapStateToProps = ({ favorites }) => {
  return {
    favorites
  };
};
export default connect(mapStateToProps)(Favorites);
