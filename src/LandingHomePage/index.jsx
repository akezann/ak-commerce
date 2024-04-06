import React from "react";
function index() {
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <a href={"/products"}>
        <span className="text-xl text-semibold text-yellow-500 border-1 p-1 px-4 bg-black ">
          Let's Shop
        </span>
      </a>
    </div>
  );
}

export default index;
