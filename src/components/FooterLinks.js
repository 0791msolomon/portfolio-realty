import React from "react";

const FooterLinks = props => {
  return (
    <div
      //   className="col-12"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#555",
        minHeight: "300px",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
        fontWeight: "bold"
      }}
    >
      <div
        className="col-lg-2 col-6"
        style={{
          textAlign: "left",
          marginTop: "2%",
          marginBottom: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <h5 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
          Use Realty
        </h5>
        <small>Create an Account</small>
        <small>Learn More</small>
        <small>Login</small>
      </div>

      <div
        className="col-lg-2 col-6"
        style={{
          textAlign: "left",
          marginTop: "2%",
          marginBottom: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <h5 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>Info</h5>
        <small>Blog</small>
        <small>Contact Us</small>
      </div>
      <div
        className="col-lg-2 col-6"
        style={{
          textAlign: "left",
          marginTop: "2%",
          marginBottom: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <h5 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
          About Us
        </h5>
        <small>About Realty</small>
        <small>Meet the team</small>
        <small>Join the team</small>
      </div>
      <div
        className="col-lg-2 col-6"
        style={{
          textAlign: "left",
          marginTop: "2%",
          marginBottom: "2%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h5 style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
          Stay Informed
        </h5>
        <input type="text" placeholder="Email" className="form-control" />

        <button
          style={{ marginTop: "1%" }}
          className="  btn btn-sm btn-primary"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default FooterLinks;
