import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormModal from './FormModel';
import axios from "axios";
import UpdateModal from './UpdateModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      showFlag: false,
      currentBooks : {},
      status: ""
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */


  componentDidMount = () => {
    axios
      .get(`https://noor-best-book.herokuapp.com/books`)
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

  handleClose = () => {
    this.setState({
      show: false,
    });
  };


  handleShowUpdate = (item) => {
    this.setState({
      showFlag: true,
      currentBooks : item,
    });
  };

  handleCloseUpdate = () => {
    this.setState({
      showFlag: false,
    });
  };

  

  addBook = (event)=>{
    event.preventDefault();
    const obj= {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    }

    console.log(obj);
    axios
     .post(`https://noor-best-book.herokuapp.com/books`, obj)
     .then((result) => {
      return this.setState({
        books: result.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  this.handleClose();
};

//note: (delete) like (get)
//(post) like (put)

deleteBook = (id) => {
  axios
    .delete(`https://noor-best-book.herokuapp.com/books/${id}`)  //id= ${id} use id to determine the book want delete
    .then((result) => {
      this.setState({
        books: result.data,
      });

    })
    .catch((err) => {
      console.log(err);
    });
};

updateBook = (event) =>{
  event.preventDefault();
  let obj = {
    title: event.target.title.value,
    description: event.target.description.value,
    status : event.target.status.value
  }
  console.log(obj)
  const id = this.state.currentBooks._id;
  axios
      .put(`https://noor-best-book.herokuapp.com/books/${id}`, obj)
      .then(result=>{
        this.setState({
          books : result.data
        })
      })
      .catch(err=>{
        console.log(err);
      })
      this.handleCloseUpdate();
    }



  render() {

    return (
      <div>

        {/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2> */}
        <div id="event">
        <>
        <Button variant="outline-danger" onClick={this.handleShow}>
          Add your favorite book
        </Button>
        <FormModal 
              show={this.state.show}
              handleClose={this.handleClose}
              addBook={this.addBook}
              handleOnChange={this.handleOnChange}
            />
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
          <Button variant="light"
              onClick={() => this.deleteBook(item._id)}  // if you want to pass a prameter to your function that inside event handler , just make it arrow function
              >
              Delete This Book, sure!
           </Button>
           <Button variant="outline-light"
                onClick={() => this.handleShowUpdate(item)}
                >
                Update This Book, sure!
            </Button>
        </Carousel.Caption>
      </Carousel.Item>
      )})}
      </Carousel>

      <UpdateModal
      show={this.state.showFlag}
      handleCloseUpdate={this.handleCloseUpdate}
      handleShowUpdate={this.handleShowUpdate}
      updateBook={this.updateBook}
      currentBooks={this.state.currentBooks}
      />
      </div>

        ) : (
          <h3>No Books Found :(</h3>
        )}
    
      </div>
    ); //return
  } //render
} //class


export default BestBooks;
