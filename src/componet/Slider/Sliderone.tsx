import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Sliderone() {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="pic">
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvcAA5V97lQMxDTWtHYu9s5TADCHJQhASEA&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption className="pics">
          <h3>
            {" "}
            <b> Super Market for Fresh Gocery</b>{" "}
          </h3>
          <button>shop now </button>
          <p>
            {" "}
            <b>introduced new gocery shopping onlice </b>{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="pic">
        <img
          className="d-block w-100"
          src="https://img.packworld.com/files/base/pmmi/all/image/2020/02/GettyImages_1054071292.5e42e3bb55139.png?auto=format%2Ccompress&fit=max&q=70&w=1200"
          alt="Second slide"
        />

        <Carousel.Caption className="pics">
          <h3> Free shipping on order 100$</h3>
          <p>
            Free shipping for first time customers only after that discount will
            be applicable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliderone;
