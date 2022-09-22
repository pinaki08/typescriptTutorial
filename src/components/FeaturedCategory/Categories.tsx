import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

interface Iproductlist {
  img: string;
  title: string;
}

interface Icatergory {
  productlist: Array<Iproductlist>;
}
const Categories = (props: Icatergory) => {
  const { productlist } = props;

  return (
    <div className="productlist">
    <Container fluid>
      <Row >
        {productlist?.map((item: Iproductlist, index: number) => {
          return (
            <Col key={index} >
              <Row>
                <Col className="item1">
                  <img src={item.img} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <span style={{ color: "black" }}>{item.title}</span>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Container>
    </div>
  );
};

export default Categories;
