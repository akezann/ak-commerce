import React, { useEffect, useState } from "react";
import axios from "axios";
//styles

import "./App.css";

import ProductCard from "./components/Products/ProductCard";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";

import { useSelector } from "react-redux";

const App = () => {
  const [data, setData] = useState([]);
  const searchValueReducer = useSelector((state) => state.filter.searchValue);

  const [category, setCategory] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(109, response)
      } catch (error) {
        console.log(109, error)

        console.error(error);
      }
    };
    console.log(123,data)

    fetchData();
  }, []);

  return (
    <div>
      <SubNavbar />
      <Navbar />
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
                    image={data.images[0]}
                    description={data.description}
                    price={data.price}
                    rating={data.rating}
                    stock={data.stock}
                    brand={data.brand}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default App;
