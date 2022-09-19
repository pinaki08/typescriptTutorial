import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UperButton from "./UperButton";
function SingleContainer() {
  return (
    <Container fluid className="up">
      <Row>
        <Col>
          <p>Super Value deals save more with cupons</p>
          <UperButton />
        </Col>
        
      </Row>
    </Container>
  );
}

export default SingleContainer;
