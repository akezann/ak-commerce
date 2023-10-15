import React from 'react'
import { useEffect, useState } from "react";

import ProductCard from "../ProductCard";

import { useSelector } from "react-redux";

function index() {
  const productdata = useSelector((state) => state.productdata.data);
  const [data, setData] = useState()
  const searchValueReducer = useSelector((state) => state.filter.searchValue);

  useEffect(() => {
    setData(productdata)
  }, [productdata])
  return (
    <div className="flex flex-wrap justify-center items-start px-4 py-8 h-full justify-start items-dtart flex-row gap-4">
      {data
        ? data
          .filter((item) => {
            if (searchValueReducer !== "")
              return item.title.includes(searchValueReducer)
            return item
          })
          .map((item, key) => {
            return (
              <ProductCard
                key={key}
                data={item}
              />
            );
          })
        : <p>loading...</p>}
    </div>
  )
}

export default index