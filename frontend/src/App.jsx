import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import ProductsContainer from './components/Products/ProductsContainer'
import Favorites from './components/Products/Favorites'
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./redux/data";
import axios from "axios";


//styles
import "./App.css";

const App = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(addData(data))
  }, [data])

  return (
    <div className="relative">
      <Router>
        <SubNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsContainer products={data} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
