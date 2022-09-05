import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
      .get("http://localhost:3005/books")
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    /* TODO: render all the books in a Carousel */

    return (
     
      <div>
        {this.state.books.length ? (

          <div>
          
      <Carousel fade>
      {this.state.books.map((item) => {
        return(
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="slide"
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
        //<h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        ) : (
          <h3>No Books Found :(</h3>
        )}
    
      </div>
    ); //return
  } //render
} //class


export default BestBooks;
