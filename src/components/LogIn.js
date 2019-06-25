import React from "react";
import Register from "./Register";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { register: false };
  }
  render() {
    if (this.state.register) {
      return <Register />;
    }
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
        >
          <div class="form-group">
            <h3 style={{ color: "#17a2b8" }}>Login</h3>
            <label
              for="exampleInputEmail1"
              style={{ float: "left", color: "#17a2b8" }}
            >
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label
              for="exampleInputPassword1"
              style={{ float: "left", color: "#17a2b8" }}
            >
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <button
              type="submit"
              class="btn "
              style={{
                float: "left",
                backgroundColor: "#17a2b8",
                color: "white"
              }}
            >
              Submit
            </button>
            <button
              type="submit"
              class="btn "
              style={{
                float: "left",
                backgroundColor: "#17a2b8",
                color: "white"
              }}
              onClick={() => this.setState({ register: true })}
            >
              Register
            </button>
          </div>

          <div style={{ marginTop: "15%", float: "left" }}>
            <a href="google.com">forgot password</a>
          </div>
        </form>
      </div>
    );
  }
}
export default LogIn;
