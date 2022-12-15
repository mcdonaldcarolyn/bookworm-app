import { Col, Row, Button } from "react-boostrap";

export default function Book(props) {
  const { book } = props;
  const toggleButtonText = book.finished ? "Unfinish" : "finished";
  return (
    <div>
      <Row>
        <Col lg={3} sm={12}>
          Title:
        </Col>
        <Col lg={9} sm={12}>
          {book.title}
        </Col>
      </Row>
      <Row>
        
      </Row>
    </div>
  )
}