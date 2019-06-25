import React from "react";
import axios from "axios";
import { PasswordInput, PasswordConfirm, EmailInput } from "./RegisterInputs";
import validator from "validator";
const url = process.env.REACT_APP_BASEURL || "http://localhost:5000";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm: "",
      errors: {},
      valid: false
    };
  }
  onChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
    if (!validator.isEmail(this.state.email)) {
      return this.setState({
        errors: { email: "Invalid email" }
      });
    }
    if (
      this.state.password.trim().length < 6 &&
      this.state.password.trim().length > 0
    ) {
      return this.setState({
        errors: { password: "Password must be at least 6 characters" }
      });
    }
    if (
      this.state.password !== this.state.confirm &&
      this.state.confirm.trim().length > 0
    ) {
      return this.setState({
        errors: { confirm: "passwords do not match" }
      });
    }
    this.setState({ errors: {} });
  };
  submit = e => {
    e.preventDefault();
    if (!validator.isEmail(this.state.email)) {
      return this.setState({
        errors: { email: "Invalid email" }
      });
    }
    if (this.state.password.trim().length < 6) {
      return this.setState({
        errors: { password: "Password must be at least 6 characters" }
      });
    }
    if (this.state.password !== this.state.confirm) {
      return this.setState({
        errors: { confirm: "passwords do not match" }
      });
    }
    axios
      .post(`${url}/api/user/createUser`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ errors: {} });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#17a2b8"
        }}
      >
        <form
          className="col-lg-3 col-sm-10"
          style={{
            padding: "5%",
            margin: "5%",
            border: "solid 1px gray",
            backgroundColor: "#EAEAEA",
            borderRadius: "20px"
          }}
          onSubmit={e => this.submit(e)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <EmailInput
              name={"email"}
              error={this.state.errors.email}
              onChange={this.onChange}
            />

            <PasswordInput
              name={"password"}
              error={this.state.errors.password}
              onChange={this.onChange}
            />

            <PasswordConfirm
              name={"confirm"}
              error={this.state.errors.confirm}
              onChange={this.onChange}
            />
            <button
              type="submit"
              class="btn "
              style={{
                float: "left",
                backgroundColor: "#17a2b8",
                color: "white"
              }}
              onClick={e => this.submit(e)}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
