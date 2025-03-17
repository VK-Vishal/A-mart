import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUsers } from "react-icons/fa"; // Icons for Community and Cart
import logo from "../assets/logowb.png";
import SearchBar from "./SearchBar"; // Ensure correct path

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow py-3">
      <div className="container-fluid">
        {/* Left Side: Logo & Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="A-MART Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold">A-MART</span>
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center & Right: Search and Buttons */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <div className="d-flex flex-grow-1 justify-content-end align-items-center">
            {/* Search Bar */}
            <div className="me-3">
              <SearchBar />
            </div>

            {/* Button Group */}
            <div className="d-flex align-items-center">
              <Link to="/community" className="btn btn-outline-primary btn-sm me-2">
                <FaUsers className="me-1" /> Community
              </Link>
              <Link to="/cart" className="btn btn-outline-primary btn-sm me-2">
                <FaShoppingCart className="me-1" /> Cart
              </Link>
              <Link to="/sell" className="btn btn-warning btn-sm me-2">
                Sell
              </Link>
              <Link to="/login" className="btn btn-outline-primary btn-sm">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
