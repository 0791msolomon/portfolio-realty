import React from "react";
import { connect } from "react-redux";
import { addFavorite } from "../actions";
import "./index.css";
import axios from "axios";
import validator from "email-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-awesome-modal";
import { EmailInput, NameInput } from "./ContactInputs";
const url = process.env.REACT_APP_BASEURL || "http://localhost:5000";

class IndividualListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNames: ["Matt"],
      open: false,
      name: "",
      email: "",
      question: "",
      errors: {}
    };
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
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
  renderName = () => {
    let name = this.state.randomNames[
      Math.floor(Math.random() * this.state.randomNames.length)
    ];
    return (
      <small style={{ marginLeft: "3%", alignSelf: "flex-start" }}>
        <span style={{ fontWeight: "bold" }}>{name}</span> with{" "}
        <span style={{ fontWeight: "bold" }}>Mock Realty</span>
      </small>
    );
  };
  closeModal = () => {
    this.setState({ open: false, question: "", name: "", email: "" });
  };
  addFavorite = () => {
    this.props.addFavorite(this.props.activeListing._id);
    return toast.info("Added to favorites", {
      position: "top-right",
      autoClose: 2300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };
  render() {
    let priceArr;
    let footage;
    let pricePerFoot = 0;

    if (this.props.activeListing.footage) {
      let arr = this.props.activeListing.footage.toString().split("");
      arr.splice(arr.length - 3, 0, ",");
      footage = arr.join("");

      let value = this.props.activeListing.price.split("");
      let num = value.splice(1, value.length - 1);
      pricePerFoot = num.join("") / this.props.activeListing.footage;
    }
    if (this.props.activeListing.price) {
      priceArr = this.props.activeListing.price.split("");
      priceArr.splice(4, 0, ",");
      priceArr.join("");
    }
    return (
      <div
        className="container"
        style={{
          marginTop: "3%",
          marginBottom: "3%",
          display: "flex",
          flexDirection: "column"
        }}
      >
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
        <small
          style={{
            marginLeft: "3%",
            alignSelf: "flex-start",
            fontWeight: "bold"
          }}
        >
          Presented by:
        </small>
        {this.renderName()}
        <div className="imgContainer" style={{ height: "100%", width: "100%" }}>
          <img
            className="img-fluid"
            style={{
              borderRadius: "20px",
              width: "100%",
              maxHeight: "550px",
              overflow: "hidden"
            }}
            src={this.props.activeListing.img}
          />
        </div>
        <div
          className="col-12"
          style={{
            marginTop: "2%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-start",
              textAlign: "left"
            }}
          >
            <h3>{this.props.activeListing.price ? priceArr : null}</h3>
            <h6>
              {this.props.activeListing.address
                ? this.props.activeListing.address
                : null}
            </h6>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "flex-start"
              }}
            >
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {this.props.activeListing.rooms || 0}
                </span>
                Beds
              </p>
              &nbsp;&nbsp;
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {this.props.activeListing.baths || 0}
                </span>
                Baths
              </p>
              &nbsp; &nbsp;
              <p>
                <span style={{ fontWeight: "bold" }}>{footage}</span> SqFt
              </p>
            </span>
          </div>
          <span>
            <button
              onClick={() => this.addFavorite()}
              style={{ alignSelf: "flex-end" }}
              type="button"
              class="btn btn-danger btn-circle btn-xl"
            >
              <i class="fa fa-heart" />
            </button>
            <button
              onClick={() => this.setState({ open: true })}
              style={{ alignSelf: "flex-end" }}
              type="button"
              class="btn btn-info btn-circle btn-xl"
            >
              <i class="fa fa-question" />
            </button>
          </span>
        </div>
        <div
          style={{
            marginTop: "3%",
            width: "100%",
            backgroundColor: "black",
            height: "1px"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignContent: "flex-start"
          }}
        >
          <small style={{ textAlign: "left" }}>
            <b> Property Type:</b> Single Family Home
          </small>
          <small style={{ textAlign: "left" }}>
            <b> Year Built:</b> {Math.floor(Math.random() * 48) + 1970}
          </small>
          <small style={{ textAlign: "left" }}>
            <b> Price per square foot:</b> {`$${Math.ceil(pricePerFoot)}`}
          </small>
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
                this.props.activeListing.img
                  ? this.props.activeListing.img
                  : null
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
                    placeholder={"Your Question"}
                    name="question"
                    value={this.state.question}
                    onChange={e => this.onChange(e)}
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
      </div>
    );
  }
}
const mapStateToProps = ({ activeListing, favorites }) => {
  return {
    activeListing,
    favorites
  };
};
export default connect(
  mapStateToProps,
  { addFavorite }
)(IndividualListing);
