import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SellProduct from "./components/SellProduct";
import ProductList from "./components/ProductList";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  // Initial product data for SellProduct/ProductList
  const [menuData, setMenuData] = useState([
    { 
      name: "Wheat", 
      category: "Grains", 
      price: "₹40/kg", 
      details: "High quality wheat for everyday use.", 
      link: "/grains",
      image: "https://via.placeholder.com/300x200?text=Wheat"
    },
    { 
      name: "Chickpeas", 
      category: "Pulses", 
      price: "₹100/kg", 
      details: "Premium chickpeas for chana masala.", 
      link: "/pulses",
      image: "https://via.placeholder.com/300x200?text=Chickpeas"
    }
  ]);

  // Function to add a new product from the SellProduct form
  const handleAddProduct = (newProduct) => {
    setMenuData((prevData) => [...prevData, newProduct]);
  };

  return (
    <>
      {!isAuthPage && (
        <>
          <Home />
          <Navbar />
          <div className="container mt-4">
            {/* Selling Page */}
            <SellProduct onAddProduct={handleAddProduct} />
            <hr />
            {/* Product Listing */}
            <ProductList menuData={menuData} />
          </div>
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
