import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import logo from "../../assets/img/freshcart-logo.svg";

function HeaderMid() {
  return (
    <div className="headerMid">
      <Container>
        <Row>
          <Col md={3}>
            <img src={logo} alt="" />
          </Col>
          <Col md={6}>2 of 3 (wider)</Col>
          <Col md={3} style={{ textAlign: "right" }}>
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderMid;
