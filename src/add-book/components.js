import { useSate } from 'react';
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
            
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}