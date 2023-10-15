import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { clearFavorite } from '../../../redux/favoriteSlice';

function index() {
  const favorite = useSelector((state) => state.favorite.favoriteItems);
  const productdata = useSelector((state) => state.productdata.data);
  const searchValueReducer = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch()



  const [data, setData] = useState(productdata);

  return (
    <div className="flex flex-wrap justify-start flex-col items-start px-8 py-8 h-full justify-start items-dtart flex-row ">
      {favorite.length > 0 ? <div className="flex flex-wrap justify-center  px-4 py-0 flex-row gap-4">
        <p className=' rounded-full text-sm font-semibold p-2 px-4 cursor-pointer bg-opacity-75 hover:underline ' onClick={() => { dispatch(clearFavorite()) }}>clear Favorites</p>
      </div> : null}
      <div className="flex flex-wrap justify-start items-start px-2 py-8 w-full h-full justify-start items-dtart flex-row gap-4">
        {data && favorite.length > 0
          ? data
            .filter((item => {
              if (favorite.length > 0)
                return favorite.includes(item.id)
            }))
            .filter((item) => {
              if (searchValueReducer !== "")
                return item.title.includes(searchValueReducer) && item.title.toLowerCase().includes(searchValueReducer)
              return item
            })
            .map((data, key) => {
              return (
                <ProductCard
                  key={key}
                  data={data}
                />
              );
            })
          :
          <div className='h-full w-full flex justify-center items-center'>
            <p className='text-xl font-400'>There is no favorites. !<i class="fa fa-heart "></i><i class="fa fa-heart rotate-180"></i>!</p>
          </div> 
          }
      </div>
    </div>
  )
}

export default index
