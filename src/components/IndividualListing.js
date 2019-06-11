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
import Collapsible from "react-collapsible";
import moment from "moment";
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
      errors: {},
      openOne: new Date().setDate(new Date().getDate() + 2),
      openTwo: new Date().setDate(new Date().getDate() + 4),
      openThree: new Date().setDate(new Date().getDate() + 6),
      yearBuilt: Math.floor(Math.random() * 48) + 1970
    };
  }
  componentWillMount = () => {
    let priceArr = this.props.activeListing.price.split("");
    priceArr.shift();
    let price = priceArr.join("");
    price -= 10000;
    let priceString = price.toString();
    // priceString.split("");
    let priceStringArr = priceString.split("");
    priceStringArr.unshift("$");
    priceStringArr.splice(4, 0, ",");
    this.setState({
      oldPrice: priceStringArr.join("")
    });
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
    console.log(this.props.activeListing);
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.open !== this.state.open) {
      return true;
    }
    return false;
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
    //this is a giagantic mess, hindsight being 20/20 i would've left out the
    // "$" in the collection documents and saved myself tons of stupid work like this
    // let adjusted = this.props.activeListing.price.toString().split("");
    // adjusted.shift();
    // let newAdjusted = adjusted.join("");
    // newAdjusted -= 20000;
    // newAdjusted.toString();
    // let adjustArray = newAdjusted.split("");
    // adjustArray.splice(3, 0, ",");
    // adjustArray.join("");
    // console.log(adjustArray);
    let changeDateOne = new Date().setMonth(new Date().getMonth() - 8);
    let changeDateTwo = new Date().setMonth(new Date().getMonth() - 5);
    let changeDateThree = new Date().setMonth(new Date().getMonth() - 2);
    let priceArr;
    let footage;
    let pricePerFoot = 0;
    let address;
    if (this.props.activeListing.footage) {
      let arr = this.props.activeListing.footage.toString().split("");
      arr.splice(arr.length - 3, 0, ",");
      footage = arr.join("");

      let value = this.props.activeListing.price.split("");
      let num = value.splice(1, value.length - 1);
      pricePerFoot = num.join("") / this.props.activeListing.footage;

      address = this.props.activeListing.address.split(" ");
      for (let char in address) {
        char = ` ${char} `;
      }
      address[address.length - 2] = this.props.activeListing.state + " ";

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
              {this.props.activeListing.address ? address.join(" ") : null}
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
            <b> Year Built:</b> {this.state.yearBuilt || 0}
          </small>
          <small style={{ textAlign: "left" }}>
            <b> Price per square foot:</b> {`$${Math.ceil(pricePerFoot)}`}
          </small>
        </div>
        <Collapsible trigger="Open Houses" style={{ textAlign: "left" }}>
          <ul
            style={{
              alignItems: "flex-start",
              listStyle: "none",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <p
              style={{ textAlign: "left", fontWeight: "bold", marginTop: "1%" }}
            >
              Come view us on {moment(this.state.openOne).format("l")} at 3pm
            </p>
            <p
              style={{ textAlign: "left", fontWeight: "bold", marginTop: "1%" }}
            >
              Come view us on {moment(this.state.openTwo).format("l")} at 3pm
            </p>
            <p
              style={{ textAlign: "left", fontWeight: "bold", marginTop: "1%" }}
            >
              Come view us on {moment(this.state.openThree).format("l")} at 3pm
            </p>
          </ul>
        </Collapsible>
        <Collapsible trigger="Property Details" style={{ textAlign: "left" }}>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            {`${this.props.activeListing.rooms} bedroom, ${
              this.props.activeListing.baths
            } bath Manufactured home on generous treed lot with fenced yard and mountain view. 
              Would make a great rental or starter home. Possible financing options through Private Lender. 
              Don't miss this opportunity to own a home in Flagstaff for only ${this.props.activeListing.price.substring(
                0,
                4
              ) || 0}k !`}
          </p>
          <h5 style={{ textAlign: "left" }}>Property Features</h5>
          <h6 style={{ textAlign: "left" }}>Bedrooms</h6>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            {this.props.activeListing.rooms}
          </p>
          <h6 style={{ textAlign: "left" }}>Bathrooms</h6>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            {this.props.activeListing.baths}
          </p>
          <h6 style={{ textAlign: "left" }}>Size</h6>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            {footage} sq ft
          </p>
        </Collapsible>
        <Collapsible trigger="Property History" style={{ textAlign: "left" }}>
          <small>
            (There's no real data since this is a mock site, but if there were
            it'd go here)
          </small>
          <h5 style={{ textAlign: "left" }}>Property History</h5>
          <div className="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Event</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{moment(changeDateOne).format("l")}</th>
                  <td>Listed</td>
                  <td>{`${this.state.oldPrice}`}</td>
                </tr>
                <tr>
                  <th scope="row">{moment(changeDateTwo).format("l")}</th>
                  <td>Sold</td>
                  <td>{`${this.state.oldPrice}`}</td>
                </tr>
                <tr>
                  <th scope="row">{moment(changeDateThree).format("l")}</th>
                  <td>Price changed</td>
                  <td>{priceArr}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
        <Collapsible trigger="Nearby Schools" style={{ textAlign: "left" }}>
          <p style={{ textAlign: "left" }}>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
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
                    placeholder={`I woud like more information on this property}`}
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
