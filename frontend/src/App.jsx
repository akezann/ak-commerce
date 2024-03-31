import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import ProductsContainer from "./components/Products/ProductsContainer";
import Favorites from "./components/Products/Favorites";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { addData } from "./redux/data";
import axios from "axios";

//styles
import "./App.css";
import LoginRegister from "./components/LoginRegister";

const App = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

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

  useEffect(() => {
    dispatch(addData(data));
  }, [data]);

  return (
    <div className="relative flex justify-center items-center">
      <div className="w-full max-w-[1324px] h-screen border-x">
        <Router>
          <SubNavbar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductsContainer products={data} />}
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<LoginRegister />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
