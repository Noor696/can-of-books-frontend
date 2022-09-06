import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */


  componentDidMount = () => {
    axios
      .get("http://localhost:3001/books")
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  addBook = (event)=>{
    event.preventDefault();
    alert(1);
  }




  render() {

    /* TODO: render all the books in a Carousel */

    return (
     
      <div>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <div id="event">
        <>
        
        <Button variant="outline-danger" onClick={this.handleShow} >
          Add your favorite book
        </Button>
        <Form.Group className="mb-3" controlId="form" onClick={this.addBook}>
        <Form.Label>title:</Form.Label>
        <Form.Control type="title" placeholder="Enter book title" />
        <Form.Label>description:</Form.Label>
        <Form.Control type="description" placeholder="Enter book description" />
        <Form.Label>status:</Form.Label>
        <Form.Control type="status" placeholder="Enter book status" />
        </Form.Group>
        
        </>

        </div>

        {this.state.books.length ? (

          <div>
          
      <Carousel fade>
      {this.state.books.map((item) => {
        return(
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://news.fordham.edu/wp-content/uploads/2018/10/magicstock.jpg"
          alt={item.title}
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.status}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )})}
      </Carousel>
      </div>

        ) : (
          <h3>No Books Found :(</h3>
        )}
    
      </div>
    ); //return
  } //render
} //class


export default BestBooks;
