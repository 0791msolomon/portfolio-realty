import React from "react";

const MyLinks = props => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        backgroundColor: "white",
        display: "flex",

        borderBottom: "solid 3px lightgray",
        backgroundColor: "lightgray"
      }}
    >
      <div
        className="col-4"
        style={{
          height: "100%",
          padding: "0",
          margin: "0",
          float: "left",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center"
        }}
      >
        <div className="nav-item">
          <a
            className="nav-link"
            href="https://www.facebook.com/mateo.solomon.16"
            target="_blank"
          >
            <i className="fab fa-facebook-f fa-3x" />
          </a>
        </div>
        <div className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/0791msolomon"
            target="_blank"
          >
            <i className="fab fa-github fa-3x" />
          </a>
        </div>
        <div className="nav-item">
          <a
            className="nav-link"
            href="https://www.instagram.com/mateo_solomon/?hl=en"
            target="_blank"
          >
            <i className="fab fa-instagram fa-3x" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default MyLinks;
