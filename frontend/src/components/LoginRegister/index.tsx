import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function container() {
  const [currentTab, setCurrentTab] = useState("LOGIN");
  return (
    <div>
      <button
        onClick={() => {
          setCurrentTab((prev) => {
            return prev === "LOGIN" ? "REGISTER" : "LOGIN";
          });
        }}
      >
        Swap
      </button>
      {currentTab === "LOGIN" ? <Login /> : <Register />}
    </div>
  );
}

export default container;
