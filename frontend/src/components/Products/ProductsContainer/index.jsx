import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../ProductCard";

import { useSelector } from "react-redux";

function index() {

  const [data, setData] = useState([]);
  const searchValueReducer = useSelector((state) => state.filter.searchValue);


  const [category, setCategory] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-start items-start px-20 py-8 h-full justify-start items-dtart flex-row gap-4">
      {data && searchValueReducer === ""
        ? data
          .filter((item) => {
            if (category)
              return item.category === category;
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
        : data
          .filter((item) => {
            return item.title.toLowerCase().includes(searchValueReducer);
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
          })}
    </div>
  )
}

export default index