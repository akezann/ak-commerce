import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

function index() {
  const favorite = useSelector((state) => state.favorite.favoriteItems);
  const cart = useSelector((state) => state.productdata.data);
  const searchValueReducer = useSelector((state) => state.filter.searchValue);



  const [data, setData] = useState(cart);

  console.log(11,data)

  return (
    <div className="flex flex-wrap justify-start items-start px-20 py-8 h-full justify-start items-dtart flex-row gap-4">
      {data
        ? data
          .filter((item) => {
            if (searchValueReducer !== "")
              return item.title.includes(searchValueReducer) && item.title.toLowerCase().includes(searchValueReducer)
            return item
          })
          .map((data, key) => {
            return (
              <ProductCard
                key={key}
                id={data.id}
                title={data.title}
                image={data.image}
                description={data.description}
                price={data.price}
                rating={data.rating.rate}
              />
            );
          })
        : null}
    </div>
  )
}

export default index
