import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import LogoIcon from "../../assets/LogoIcon";
function index() {
  const [currentTab, setCurrentTab] = useState("LOGIN");
  return (
    <div className="flex w-full h-full justify-center items-start p-4">
      <div className="flex flex-row min-w-[850px] shadow-lg bg-blue-[#fafafa] justify-center items-center h-full max-h-[600px] rounded-2xl p-2">
        <div className="flex h-full w-[50%] rounded-r-xl">
          {currentTab === "LOGIN" ? <Login /> : <Register />}
        </div>
        <div className="w-full h-full w-[450px] relative">
          <a href={"/"} className="absolute top-4 left-4 z-[1]">
            <div className="flex justify-center items-center cursor-pointer">
              <LogoIcon />
              <p className="text-2xl font-semibold">
                <span className="text-4xl text-yellow-300 font-bold">AK</span>
                Shop
              </p>
            </div>
          </a>
          <img
            className="w-full h-full !rounded-r-xl brightness-75 "
            src={
              "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default index;
