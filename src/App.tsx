import React from "react";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./componet/Header";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
