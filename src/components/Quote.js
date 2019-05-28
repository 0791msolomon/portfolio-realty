import React from "react";

const Quote = props => {
  return (
    <div
      style={{
        minHeight: "100px",
        height: "auto",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "solid 3px lightgray"
      }}
    >
      <blockquote class="blockquote text-center">
        <p class="mb-0" style={{ fontFamily: "Times, Times New Roman, serif" }}>
          "If you haven't found it yet, keep looking. Don't settle. As with all
          matters of the heart, you'll know it when you find it"
        </p>
        <footer class="blockquote-footer">Steve Jobs </footer>
      </blockquote>
    </div>
  );
};
export default Quote;
