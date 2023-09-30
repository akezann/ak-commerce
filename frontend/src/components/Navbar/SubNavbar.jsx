import React, { useState } from "react";
import { useSelector } from "react-redux";

function SubNavbar() {
  const favorite = useSelector((state) => state.favorite.favoriteItems);

  return (
    <div className="flex justify-end items-center  w-full bg-gray-100 p-2 px-20">
      <ul className="flex justify-center items-center gap-4">
        <li className="flex justify-center items-center text-sm gap-2 mr-2 cursor-pointer">
          <i class="fa fa-heart"></i>
          <span className="hover:underline">
            My Favorites {`(${favorite.length})`}
          </span>
        </li>
        <li className="text-sm hover:underline cursor-pointer">
          Privacy Settings.
        </li>
        <li className="text-sm hover:underline cursor-pointer">help</li>
        <li className="text-sm hover:underline cursor-pointer">
          Buyer Protection.
        </li>
      </ul>
    </div>
  );
}

export default SubNavbar;
