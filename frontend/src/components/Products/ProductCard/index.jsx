import React from "react";
import AddToCartIcon from "../../../assets/AddToCartIcon";
import HeartIcon from "../../../assets/HeartIcon";
import formatPrice from "../../../utils/formatPrix";

// redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../../../redux/cartSlice";
import { addToFavorite } from "../../../redux/favoriteSlice";

function ProductCard(props) {
  const cart = useSelector((state) => state.favorite.favoriteItems);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(item);
  };

  const handleAddFav = (item) => {
    dispatch(addToFavorite(item));
  };

  console.log(cart);

  return (
    <div className="flex justify-start items-center bg-white flex-col w-64 h-96 gap-1 rounded-[8px] hover:shadow-xl duration-200">
      <div className="w-full h-3/5 relative cursor-pointer p-2">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-fill rounded-[4px]"
        />
        <span
          onClick={() => {
            handleAddFav(props.id);
          }}
          className="flex justify-center items-center absolute top-2 right-2 text-gray-200 bg-black bg-opacity-30 rounded-[4px] p-[2px] text-gray-100 "
        >
          <HeartIcon />
        </span>
        <span></span>
      </div>
      <div className="flex flex-col w-full h-1/3 p-2 gap-2 relative">
        <div>
          <p className="text-sm font-bold m-0 w-40 truncate">{props.title}</p>
          <div className="flex flex-col gap-0">
            <p className="text-sm m-0 w-full line-clamp-2 text-slate-600	">
              {props.description}
            </p>
            <span className="text-2xl font-bold text-black relative">
              {`${formatPrice(props.price)}.00`}
              <span className="text-lg  absolute t-1">$</span>
            </span>
            {/* <p className="text-xs m-0 text-gray-500		">
              Hurry! Only{" "}
              <span className="font-semibold test-sm">{props.stock}</span> items{" "}
              <span className="font-semibold test-sm">left</span> in stock!
            </p> */}
          </div>
          {/* <p className="flex flex-row justify-center items-center gap-1 absolute top-2 bg-yellow-300 bg-opacity-75  right-1 text-xs font-semibold px-1 rounded-md m-0">
            {props.rating} <RateStar />
          </p> */}
        </div>
        <div className="flex justify-between items-center">
          {/* <span
            onClick={() => {
              handleAddToCart(props.id);
            }}
            className="flex justify-center items-center gap-1 text-sm cursor-pointer font-medium text-underline bg-yellow-500 w-max px-2 py-px rounded-xl bg-opacity-50 hover:bg-opacity-75 ease-in duration-100"
          >
            <AddToCartIcon />
            add to cart
          </span> */}
          <span className="text-sm underline cursor-pointer w-full text-end text-yellow-500 hover:text-yellow-600 duration-200">
            More details {">"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;