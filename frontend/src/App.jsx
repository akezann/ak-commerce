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
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SubNavbar />
      <Navbar />
      <div className="flex flex-wrap justify-start items-start px-20 py-8 h-screen justify-start items-dtart flex-row gap-2 bg-gray-200">
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
                    image={data.images[0]}
                    description={data.description}
                    price={data.price}
                    rating={data.rating}
                    stock={data.stock}
                    brand={data.brand}
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
