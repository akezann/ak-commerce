import React from "react";
import ArrowLeft from "../../../assets/ArrowLeft";
import Share from "../../../assets/Share";
import HeartIcon from "../../../assets/HeartIcon";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from "../../../redux/favoriteSlice";

function index() {
  const favorite = useSelector((state) => state.favorite.favoriteItems);
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const handleAddFav = (item) => {
    dispatch(addToFavorite(item));
  };

  return (
    <div className="w-[200px] border-1 border-black bg-red-100">
      <p>filters</p>
    </div>
  );
}

export default index;
