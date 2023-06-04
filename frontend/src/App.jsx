import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Hello from "./components/Hello";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

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
    <div className="flex h-screen justify-start items-dtart flex-col">
      {data ? (
        data.map((data, key) => {
          return (
            <div key={key}>
              <h3>
                {data.title} {"->"} {data.brand}
              </h3>
              <small>{data.category}</small>
              <p>{data.description}</p>
              <span>price: {data.price}$</span>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {data.images ? (
                  data.images.map((item, key) => {
                    return (
                      <img
                        key={key}
                        src={item}
                        alt=""
                        width={180}
                        height={120}
                      />
                    );
                  })
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
