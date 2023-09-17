import React, { useState, useEffect } from "react";
import formatPrice from "../../../utils/formatPrix";

function ProductCard(props) {
  const [priceFormat, setPriceFormat] = useState(formatPrice(props.price));

  useEffect(() => {
    // let USDollar = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: "MAD",
    // });
    // setPriceFormat(`${USDollar.format(props.price)}`);
  }, []);
  return (
    <div className="flex justify-start items-center flex-col w-72 h-max gap-1 rounded-md cursor-pointer hover:shadow-lg duration-200">
      <div className="w-full h-2/3 relative">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-fill rounded-t-md shadow-sm"
        />
        <span className="flex justify-center items-center absolute top-2 right-2 bg-black bg-opacity-75 py-0 px-2 rounded-md text-white text-sm font-bold">
          {props.brand}
        </span>
      </div>
      <div className="flex flex-col w-full h-1/3 p-2 gap-4 relative">
        <div>
          <p className="text-sm font-bold m-0 w-40 truncate">{props.title}</p>
          <div className="flex flex-col gap-0">
            <p className="text-sm m-0 w-48 truncate">{props.description}</p>
            <span className="text-2xl font-bold">
              {`${priceFormat}.00`}
              <span className="text-lg font-semibold">$</span>
            </span>
            <p className="text-xs m-0">
              Hurry! Only{" "}
              <span className="font-semibold test-sm">{props.stock}</span> items{" "}
              <span className="font-semibold test-sm">left</span> in stock!
            </p>
          </div>
          <p className="flex flex-row justify-center items-center gap-1 absolute top-2 bg-yellow-300 bg-opacity-75  right-1 text-xs font-semibold px-1 rounded-md m-0">
            {props.rating}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <span>
            
          </span>
          <span className="flex justify-center items-center gap-1 text-sm font-semibold text-underline bg-yellow-500 w-max p-1 px-2  rounded-xl bg-opacity-75">
            add to cart
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
