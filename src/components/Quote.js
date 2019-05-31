import React from "react";

const Quote = props => {
  let height = props.min;

  return (
    <div
      style={{
        minHeight: height,
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
        <h3
          class="mb-0"
          style={{ fontFamily: "Times, Times New Roman, serif" }}
        >
          {props.quote}
        </h3>
        {props.speaker ? (
          <footer class="blockquote-footer">{props.speaker}</footer>
        ) : null}
      </blockquote>
    </div>
  );
};
export default Quote;
