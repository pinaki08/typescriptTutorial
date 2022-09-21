import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function HeaderTop() {
  return (
    <div className="headerTop">
      <Container>
        <Row>
          <Col>Super Value Deals - Save more with coupons</Col>
          <Col className="alignRight">
            <DropdownButton id="dropdown-basic-button" title="English">
              <Dropdown.Item href="#/action-1">Frances</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderTop;
