import React from "react";

function index({ style, onChange, value, placeholder }) {
  return (
    <>
      <input type="text" onChange={onChange} value={value} className={style} placeholder={placeholder} />
    </>
  );
}

export default index;
