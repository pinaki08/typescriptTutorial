import React from "react";
import { Container } from "react-bootstrap";
import Categories from "../components/FeaturedCategory/Categories";
import products from "../utilities/mocklist/productlist.json";

function Home() {
  return (
    <div className="App">
      <Container>
        <h1>home page</h1>

        <Categories productlist={products} />

      </Container>
    </div>
  );
}

export default Home;
