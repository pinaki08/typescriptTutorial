import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FlushContainer() {
  return (
    <div className="flushstyle">
      <Container>
        <Row>
          <Col>
            <>
              <b>Categories</b>
            </>
            <Row>Vegetables & Fruits</Row>
            <Row>Breakfast & instant food</Row>
            <Row>Bakery & Biscuits</Row>
            <Row>Atta, rice & dal</Row>
            <Row>Sauces & spreads</Row>
            <Row>Organic & gourmet</Row>
            <Row>Baby care</Row>
            <Row>Cleaning essentials</Row>
            <Row>Personal care</Row>
          </Col>
          <Col>
            <Row>Dairy, bread & eggs</Row>
            <Row>Cold drinks & juices</Row>
            <Row>Tea, coffee & drinks</Row>
            <Row>Masala, oil & more</Row>
            <Row>Chicken, meat & fish</Row>
            <Row>Paan corner</Row>
            <Row>Pharma & wellness</Row>
            <Row>Home & office</Row>
            <Row>Pet care</Row>
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

export default FlushContainer;
