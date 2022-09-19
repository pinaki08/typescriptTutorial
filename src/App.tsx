import React from "react";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./componet/Header";
import Bgroup from "./Button/Buttonstyle";
import "./App.css";
import Footer from "./componet/Slider/Footer";
import { Container } from "react-bootstrap";
import SingleContainer from "./SingleContainer/SingleContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SingleContainer />
        <Header />

        <Bgroup />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
