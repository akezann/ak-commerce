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
    <div className="flex flex-wrap justify-start items-start px-6 lg:px-24 py-8 h-full justify-start items-dtart flex-row">
      <div className='px-4 py-2 w-full flex items-center justify-end'>
        <span className='flex items-center justify-center text-xl fomt-600 gap-2 border border-yellow-500 rounded p-2 px-6 cursor-pointer'><i className='fas fa-filter text-[16px]'></i>filter</span>
      </div>
      <div className="flex flex-wrap justify-start items-start px-2 py-8 h-full justify-start items-dtart flex-row gap-4">
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
    </div>
  )
}

export default index