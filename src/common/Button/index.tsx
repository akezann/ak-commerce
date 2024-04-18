import React from "react";

interface ButtonType {
  styleClass: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  // types
}

function Button({ styleClass, children, onClick }) {
  return (
    <button className={styleClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
