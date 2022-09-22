import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

import Searchbar from "../../utilities/Searchbar";

function HeaderMid() {
  return (
    <div className="headerMid">
      <Container>
        <Row>
          <Col md={3}>
            <img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" />
          </Col>
          <Col md={8}>
            {" "}
            <Searchbar />
          </Col>
          <Col md={3} style={{ textAlign: "right" }}>
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderMid;
