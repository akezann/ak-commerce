import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Input from "./../../common/Input";
// assets
import LogoIcon from "../../assets/LogoIcon";
import SearchIcon from "../../assets/SearchIcon";
import CartIcon from "../../assets/CartIcon";

// reducers
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filter";

function index() {
  const cart = useSelector((state) => state.cart.cartItems);
  const searchValueReducer = useSelector((state) => state.filter.searchValue);
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newText = e.target.value;
    setSearchVal(newText);
    dispatch(setSearchValue(newText));
  };

  return (
    <div className="flex justify-between items-start gap-4 w-full flex-col bg-white p-4 px-6 lg:px-[80px] sticky top-0 left-0 z-10 sm:flex-row sm:items-center sm:gap-0">
      <Link to={"/"}>
        <div className="flex justify-center items-center cursor-pointer">
          <LogoIcon />
          <p className="text-lg font-semibold">
            <span className="text-2xl text-yellow-500 font-bold">AK</span>Shop
          </p>
        </div>
      </Link>

      <div className="sm:w-1/2 w-full">
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            type="text"
            styleClass={
              "w-full h-11 rounded-full focus:outline-none border focus:border-yellow-500 px-4 text-lg"
            }
            placeholder="Seach"
            value={searchValueReducer ? searchValueReducer : searchVal}
            onChange={handleChange}
          />
          <span className="absolute top-2 right-4">
            <SearchIcon />
          </span>
        </form>
      </div>
      <div className="flex justify-center items-cente gap-4">
        <div className="flex justify-center items-center text-sm font-medium relative cursor-pointer">
          Chart <CartIcon />
          <span className="flex justify-center items-center text-sm  w-4 h-4 rounded-full absolute bg-yellow-300 top-[-5px] right-[-15px]">
            {cart.length}
          </span>
        </div>
        <Link
          to="/login"
          className="text-sm font-semibold p-2 px-4 rounded-full underline"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-yellow-500 hover:bg-yellow-600 rounded-full text-sm text-white font-semibold p-2 px-4 "
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default index;
