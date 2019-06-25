import React from "react";
const classnames = require("classnames");

export const EmailInput = props => {
  return (
    <div class="form-group">
      <h3 style={{ color: "#17a2b8" }}>Register</h3>
      <label
        for="exampleInputEmail1"
        style={{ float: "left", color: "#17a2b8" }}
      >
        Email address
      </label>
      <input
        onChange={e => props.onChange(e)}
        name={props.name}
        type="email"
        className={classnames("form-control", {
          "is-invalid": props.error
        })}
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      {props.error && (
        <div style={{ textAlign: "left" }} className="invalid-feedback">
          {props.error}
        </div>
      )}
    </div>
  );
};

export const PasswordInput = props => {
  return (
    <div class="form-group">
      <label
        for="exampleInputPassword1"
        style={{ float: "left", color: "#17a2b8" }}
      >
        Password
      </label>
      <input
        onChange={e => props.onChange(e)}
        name={props.name}
        type="password"
        className={classnames("form-control", {
          "is-invalid": props.error
        })}
        placeholder="password"
      />
      {props.error && (
        <div style={{ textAlign: "left" }} className="invalid-feedback">
          {props.error}
        </div>
      )}
    </div>
  );
};

export const PasswordConfirm = props => {
  return (
    <div class="form-group">
      <label
        for="exampleInputPassword1"
        style={{ float: "left", color: "#17a2b8" }}
      >
        Confirm password
      </label>
      <input
        onChange={e => props.onChange(e)}
        name={props.name}
        type="password"
        className={classnames("form-control", {
          "is-invalid": props.error
        })}
        placeholder="password"
      />
      {props.error && (
        <div style={{ textAlign: "left" }} className="invalid-feedback">
          {props.error}
        </div>
      )}
    </div>
  );
};
