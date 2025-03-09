import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logowb.png'; // Ensure the path is correct

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container-fluid">
                    {/* Logo and Brand Name */}
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src={logo} alt="A-MART Logo" width="40" height="40" className="me-2" />
                        A-MART
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        {/* Search Bar */}
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success btn me-3 ms-4" type="submit">Search</button>
                        </form>

                        {/* Login & Sell Buttons */}
                        <div className="ms-2">
                            <button className="btn btn-outline-primary ms-2">Login</button>
                            <button className="btn btn-warning ms-2">Sell</button>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Home;
