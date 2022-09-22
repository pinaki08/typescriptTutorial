import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Idata {
  title: string;
  img: string;
  path: string;
}
interface Ibtmcenter {
  data: Array<Idata>;
}
const CenterBtm = (props: Ibtmcenter) => {
  const { data } = props;

  return (
    <div className="btmcenter">
      <Container fluid>
        <Row>
          {data?.map((item: Idata, index: number) => {
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

export default CenterBtm;
