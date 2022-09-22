import React from "react";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Center from "./components/Center";
import CenterBtm from "./components/CenterBtm/centerbtm";
import centerproducts from "./utilities/mocklist/center.json";
import Centerlast from "./components/CenterLast/Centerlast";
import lastcenter from "./utilities/mocklist/centerlinks.json";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Center />
        <Centerlast clast={lastcenter} />
        <CenterBtm data={centerproducts} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
