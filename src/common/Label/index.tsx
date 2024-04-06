import React from "react";

function index({ htmlFor, text, styleClass }) {
  return (
    <label htmlFor={htmlFor} className={styleClass}>
      {text}
    </label>
  );
}

export default index;
