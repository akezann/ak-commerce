import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

function SubNavbar() {
  const favorite = useSelector((state) => state.favorite.favoriteItems);


  return (
    <div className="flex justify-end items-center  w-full bg-gray-50 p-2 px-6 sm:px-24">
      <ul className="flex justify-center items-center gap sm:gap-4">
        <Link to={'/favorites'}>
          <li className="test-[14px] flex justify-center items-center text-sm gap-2 mr-2 cursor-pointer">
            <i className="fa fa-heart"></i>
            <span className="hover:underline">
              My Favorites {`(${favorite.length})`}
            </span>
          </li>
        </Link>
        <Link to='/privacy-settings'>
          <li className="text-sm hover:underline cursor-pointer">
            Privacy Settings.
          </li>
        </Link>
        <Link to='/help'>
          <li className="text-sm hover:underline cursor-pointer">help.</li>
        </Link>
        <Link to='/buyer-protection'>
          <li className="text-sm hover:underline cursor-pointer">
            Buyer Protection.
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SubNavbar;
