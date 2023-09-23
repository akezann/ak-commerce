import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment"
//styles

import "./App.css";

import ProductCard from "./components/Products/ProductCard";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date())
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

  useEffect(() => {
    // Set the meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Discover a wide range of high-quality products";
    setDate(moment(date).format('dddd'))
    // Add the meta description to the document head
    document.head.appendChild(metaDescription);

    // Clean up by removing the added meta tag when the component unmounts
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);
  return (
    <div>
      <SubNavbar />
      <Navbar />
      <div className="flex flex-wrap justify-start items-center px-20 py-8 h-auto justify-start items-dtart flex-row gap-2 bg-gray-200">
        {data && !category
          ? data.map((data, key) => {
              // if (key % 2 == 1)
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
    </div>
  );
};

export default App;
