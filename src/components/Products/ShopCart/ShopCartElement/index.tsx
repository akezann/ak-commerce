import React from "react";

function index({ image, title, price }) {
  return (
    <div className="rounder bg-gray-100 p-2 h-[120px] w-[600px] flex justify-start items-center gap-4 ">
      <img
        src={image}
        className="max-w-[100px] h-full object-contain mix-blend-multiply transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="flex flex-col h-full ">
        <p>{title}</p>
        <span className="font-bold">{price}$</span>
      </div>
    </div>
  );
}

export default index;
