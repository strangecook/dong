import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Login from "./login";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <Link to="/" className="nav-item">홈</Link>
          <Link to="/login" className="nav-item">소개</Link>
        </div>
        <Routes>
          <>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/login" element={<Login />}> </Route>
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;