import React from "react";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { register: false };
  }
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
        </form>
      </div>
    );
  }
}
export default LogIn;
