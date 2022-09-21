import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Footerstyle from "./Footerstyle";

const FooterBtm = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>
              &copy;{new Date().getFullYear()} © FreshCart eCommerce HTML
              Template. All rights reserved. Powered by Codescandy.{" "}
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FooterBtm;
