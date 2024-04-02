import React from "react";

function Button({ styleClass, buttonText, onClick, ...props }) {
  return (
    <button className={styleClass} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;
