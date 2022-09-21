import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

import {
  FOOTER_LINKS_ONE,
  FOOTER_LINKS_TWO,
} from "../../utilities/footerlinks";
import FooterLinks from "../FooterLinks";

function FooterTop() {
  return (
    <div className="flushstyle">
      <Container>
        <Row>
          <Col>
            <FooterLinks title="Categories" linkItems={FOOTER_LINKS_ONE} />
          </Col>
          <Col>
            <FooterLinks title="-" linkItems={FOOTER_LINKS_TWO} />
          </Col>
          <Col>
            <b>Get to know us</b> <Row>Company</Row>
            <Row>About</Row>
            <Row>Blog</Row>
            <Row>Help Center</Row>
            <Row>Our Value</Row>
          </Col>
          <Col>
            <b>For Consumers</b> <Row>Payments</Row>
            <Row>Shipping</Row>
            <Row>Product Returns</Row>
            <Row>FAQ</Row>
            <Row>Shop Checkout</Row>
          </Col>
          <Col>
            <b>Become a Shopper</b>
            <Row>Shopper Opportunities</Row>
            <Row>Become a Shopper</Row>
            <Row>Earnings</Row>
            <Row>Ideas & Guides</Row>
            <Row>New Retailers</Row>
          </Col>
          <Col>
            <b> Freshcart programs</b>
            <Row>Freshcart programs</Row>
            <Row>Gift Cards</Row>
            <Row>Promos & Coupons</Row>
            <Row>Freshcart Ads</Row>
            <Row>Careers</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterTop;
