import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";

import "./App.css";

import ProductCard from "./components/Products/ProductCard";

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("laptops");

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

  console.log(data)
  return (
    <div className="flex flex-wrap justify-start items-center p-16 h-screen justify-start items-dtart flex-row gap-16">
      {data && !category
        ? data.map((data, key) => {
            if (key % 2 == 1)
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
              return item.category === category;
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
  );
};

export default App;
