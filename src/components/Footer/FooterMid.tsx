import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterMid = () => {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col md={6}>
            <p>adsad</p>
          </Col>
          <Col md={3} className="alignRight">
            <p>Get deliveries with FreshCart</p>
          </Col>
          <Col md={3}>
            <p>adsad</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FooterMid;
