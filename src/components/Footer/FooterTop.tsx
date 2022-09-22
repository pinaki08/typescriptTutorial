import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

import {
  FOOTER_LINKS_FIVE,
  FOOTER_LINKS_FOUR,
  FOOTER_LINKS_ONE,
  FOOTER_LINKS_SIX,
  FOOTER_LINKS_THREE,
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
            <FooterLinks
              title="Get to know us"
              linkItems={FOOTER_LINKS_THREE}
            />
          </Col>
          <Col>
            <FooterLinks
              title="For Consumers"
              linkItems={FOOTER_LINKS_FOUR}
            />
          </Col>
          <Col>
            <FooterLinks
              title="Become a Shopper"
              linkItems={FOOTER_LINKS_FIVE}
            />
          </Col>
          <Col>
            <FooterLinks
              title=" Freshcart programs"
              linkItems={FOOTER_LINKS_SIX}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterTop;
