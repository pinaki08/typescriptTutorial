import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterContainer() {
  return (
    <div className="footerup">
      <Container>
        <Row>
          <Col>
            Payment Partners{" "}
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg"
              alt=""
            />{" "}
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/american-express.svg"
              alt=""
            />{" "}
            <img
              src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg"
              alt=""
            />{" "}
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/paypal.svg"
              alt=""
            />{" "}
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/visa.svg"
              alt=""
            />{" "}
          </Col>
          <Col>
            {" "}
            {""}
            Get deliveries with FreshCart
            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg"
              alt=""
            />
            {""}
            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterContainer;
