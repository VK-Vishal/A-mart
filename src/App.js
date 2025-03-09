import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();


  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
       

      
      {!isAuthPage && <Home />}
      {!isAuthPage &&<Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
