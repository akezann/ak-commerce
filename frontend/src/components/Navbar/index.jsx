import React, { useState } from "react";

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
  console.log(11, searchVal, searchValueReducer)
  return (
    <div className="flex justify-between items-center bg-white p-4 px-20">
      <div className="flex justify-center items-center cursor-pointer">
        <LogoIcon />
        <p className="text-lg font-semibold">
          <span className="text-2xl text-yellow-500 font-bold">AK</span>Shop
        </p>
      </div>
      <div className="w-1/2">
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            style={
              "w-full h-11 rounded-full focus:outline-none border focus:border-yellow-500 px-4"
            }
            placeholder="Seach..."
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
        <button className="text-sm font-semibold p-2 px-4 rounded-full underline">
          Login
        </button>
        <button className="bg-yellow-400 rounded-full text-sm font-semibold p-2 px-4 ">
          Signup
        </button>
      </div>
    </div>
  );
}

export default index;
