import React from "react";

import { Col, Container, Row } from "react-bootstrap";

interface Iclast {
  title: string;
  img: string;
  path: string;
}
interface Ibtmlast {
  clast: Array<Iclast>;
}
const Centerlast = (props: Ibtmlast) => {
  const { clast } = props;

  return (
    <div className="">
      <Container fluid>
        <Row>
          {clast?.map((item: Iclast, index: number) => {
            return (
              <Col key={index}>
                <Row>
                  <Col className="">
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

export default Centerlast;
