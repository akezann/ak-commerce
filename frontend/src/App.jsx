import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import SubNavbar from "./components/Navbar/SubNavbar";
import ProductsContainer from './components/Products/ProductsContainer'

//styles
import "./App.css";

const App = () => {

  return (
    <div>
      <SubNavbar />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<ProductsContainer />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
