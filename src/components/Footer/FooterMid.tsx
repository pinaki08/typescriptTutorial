import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterMid = () => {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col md={5}>
            <p>
              <b>Payment Partners</b>{" "}
              <img
                src="https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg"
                alt=""
              />
              <img
                src="https://freshcart.codescandy.com/assets/images/payment/american-express.svg"
                alt=""
              />
              <img
                src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg"
                alt=""
              />
              <img
                src="https://freshcart.codescandy.com/assets/images/payment/paypal.svg"
                alt=""
              />
              <img
                src="https://freshcart.codescandy.com/assets/images/payment/visa.svg"
                alt="" />
            </p>
          </Col>
          <Col md={3} className="alignRight">
            <p>
              <b>Get deliveries with FreshCart</b>
            </p>
          </Col>
          <Col md={4} className="alignRight">
            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg"
              alt=""
            />

            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FooterMid;
