import React from "react";

const Footer = props => {
  return (
    <div
      style={{
        height: "auto",
        marginBottom: "0%",
        paddingBottom: "0%",
        width: "100%",
        display: "flex",
        borderBottom: "solid 3px lightgray",
        backgroundColor: "white"
      }}
    >
      <div
        className="col-12"
        style={{
          height: "100%",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center"
        }}
      >
        <footer class="page-footer font-small blue pt-4">
          <div class="footer-copyright text-center py-3">
            © 2019 Copyright:
            <a
              href="https://matthew-s-portfolio-landing.herokuapp.com"
              target="_blank"
            >
              matthew-s-portfolio-landing.herokuapp.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
