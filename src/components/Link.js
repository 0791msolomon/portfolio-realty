import React from "react";
import "./index.css";
import house from "./photos/house.png";
const Links = props => {
  return (
    <div className="links col-12">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "none",
          float: "center"
        }}
        className="col-lg-4 col-sm-12"
      >
        <img
          src={house}
          style={{ height: "125px", width: "125px", padding: "0%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3%%"
          }}
        >
          <br />
          <h4 style={{ textAlign: "left" }}>Association of Realtors</h4>
          <small style={{ textAlign: "left" }}>words about the realtors</small>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "none",
          float: "center"
        }}
        className="col-lg-4 col-sm-12"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3%%"
          }}
        >
          <br />
          <h4>Links for Homeowners</h4>
          <a href="">
            <li style={{ float: "left" }}>Insert link for Home Owners</li>
          </a>
          <a href="">
            <li style={{ float: "left" }}>Insert link for Home Owners</li>
          </a>

          <a href="">
            <li style={{ float: "left" }}>Insert link for Home Owners</li>
          </a>

          <a href="">
            <li style={{ float: "left" }}>Insert link for Home Owners</li>
          </a>

          <a href="">
            <li style={{ float: "left" }}>Insert link for Home Owners</li>
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "none",
          float: "center"
        }}
        className="col-lg-4 col-sm-12"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3%%"
          }}
        >
          <br />
          <h4>Links for Realtors</h4>
          <a href="">
            <li style={{ float: "left" }}>Insert Links for Realtors</li>
          </a>
          <a href="">
            <li style={{ float: "left" }}>Insert Links for Realtors</li>
          </a>

          <a href="">
            <li style={{ float: "left" }}>Insert Links for Realtors</li>
          </a>

          <a href="">
            <li style={{ float: "left" }}>Insert Links for Realtors</li>
          </a>

          <a href="">
            <li style={{ float: "left" }}>Insert Links for Realtors</li>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Links;
