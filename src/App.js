import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation(); // Get the current route

  // Check if the current page is Login or Signup
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
       {/* Always show Navbar */}

      
      {!isAuthPage && <Home />}
      {!isAuthPage &&<Navbar />/* Show Home only if NOT on Login or Signup */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
