import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import ProductsContainer from "./components/Products/ProductsContainer";
import Favorites from "./components/Products/Favorites";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { addData, setLoading } from "./redux/data";
import { selectors } from "./redux/data";

import { fetchData } from "./utils/fakestoreService";

//styles
import "./App.css";
import LoginRegister from "./components/LoginRegister";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.products);

  useEffect(() => {
    dispatch(setLoading(true));

    const getProducts = async () => {
      try {
        const response = await fetchData("/products");
        dispatch(addData(response));
        dispatch(setLoading(false));
      } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
      }
    };
    getProducts();
  }, []);

  return (
    <div className="relative flex justify-center items-center overflow-hidden bg-gray-50">
      <div className="w-full max-w-[1324px] h-screen ">
        <Router>
          <SubNavbar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductsContainer products={products} />}
            />
            <Route
              path="/products/mens"
              element={<ProductsContainer products={products} />}
            />
            <Route
              path="/products/womens"
              element={<ProductsContainer products={products} />}
            />
            <Route
              path="/products/jewelery"
              element={<ProductsContainer products={products} />}
            />
            <Route
              path="/products/electronics"
              element={<ProductsContainer products={products} />}
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
