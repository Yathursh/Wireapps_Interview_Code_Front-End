import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";

import Home from "./Home";
import Mens from "./Mens";
import Womens from "./Womens";

export default function Main() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
