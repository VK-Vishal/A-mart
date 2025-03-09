import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Grains from '../menu/Grains';
import Pulses from '../menu/Pulses';
import Vegetables from '../menu/vegetables'; // lowercase
import Fruits from '../menu/Fruits';
import NaturalFibers from '../menu/NaturalFibers';
import OilseedCrops from '../menu/OilseedCrops';
import Flowers from '../menu/Flowers';
import Spices from '../menu/spices'; // lowercase


function Navbar() {
    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
                    {/* Toggle Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links Centered */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3"><Link className="nav-link" to="/">Grains</Link></li>
                            <li className="nav-item mx-3"><Link className="nav-link" to="/pulses">Pulses</Link></li>
                            <li className="nav-item mx-3"><Link className="nav-link" to="/vegetables">Vegetables</Link></li>
                            <li className="nav-item mx-3"><Link className="nav-link" to="/fruits">Fruits</Link></li>
                            <li className="nav-item mx-3"><Link className="nav-link" to="/natural-fibers">Natural Fibers</Link></li>
                            <li className="nav-item mx-3"><Link className="nav-link" to="/oilseed-crops">Oilseed Crops</Link></li>
                            <li className="nav-item mx-3"><Link className="nav-link" to="/flowers">Flowers</Link></li>
                            <li className="nav-item mx-3"><Link className="nav-link" to="/spices">Spices</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Routes Definition */}
            <Routes>
                <Route path="/" element={<Grains />} />
                <Route path="/pulses" element={<Pulses />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/fruits" element={<Fruits />} />
                <Route path="/natural-fibers" element={<NaturalFibers />} />
                <Route path="/oilseed-crops" element={<OilseedCrops />} />
                <Route path="/flowers" element={<Flowers />} />
                <Route path="/spices" element={<Spices />} />
            </Routes>
        </>
    );
}

export default Navbar;
