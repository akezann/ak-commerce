import React from "react";

function index({ styleClass, type, onChange, value, placeholder, ...props }) {
  return (
    <input
      type={type}
      name={props.name}
      onChange={onChange}
      value={value}
      className={styleClass}
      placeholder={placeholder}
    />
  );
}

export default index;
