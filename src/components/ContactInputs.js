import React from "react";
import classnames from "classnames";

export const NameInput = props => {
  return (
    <div>
      <input
        className={classnames("form-control", {
          "is-invalid": props.error
        })}
        onChange={e => props.onChange(e)}
        value={props.value}
        name="name"
        type="text"
        placeholder="Full Name"
        style={{ marginTop: "3%" }}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

export const EmailInput = props => {
  return (
    <div>
      <input
        className={classnames("form-control", {
          "is-invalid": props.error
        })}
        onChange={e => props.onChange(e)}
        value={props.value}
        name="email"
        type="email"
        placeholder="Email"
        style={{ marginTop: "3%" }}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};
