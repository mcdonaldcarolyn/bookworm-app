import { useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';

export function AddBook(props) {
 
  function getBlankBook() {
    return {
      title: '',
      author: '',
      year: '',
      image: '',
      finished: false,
    }
  }

  const [book, setBook] = useState(getBlankBook);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAddBook(book);
    setBook(getBlankBook());
  } 

  function handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setBook(oldBook => ({
      ...oldBook,
      [name]: value
    }));
  }

  return (
    <section className="input_section">
      <Card>
        <Card.Header>Add a new Book</Card.Header>
        <Card.Body className='card-body'>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <FloatingLabel label="Title">
                <Form.Control id="inputBookTitle"
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  required/>
              </FloatingLabel>
            </Form.Group>
            <Form.Check
              type="checkbox"
              name="finished"
              label="Finished?"
              checked={book.finished}
              onChange={handleChange} />
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}