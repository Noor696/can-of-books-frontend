import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class UpdateModal extends React.Component {
    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.handleCloseUpdate}>
            <Modal.Header closeButton>
            <Modal.Title>Update your favorite book!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.props.UpdateBook}>
    
            <Form.Group className="mb-3" controlId="formtit">
            <Form.Label>📔 Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter book title" name="title" defaultValue={this.props.currentBooks.title}/>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formdes">
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" placeholder="Enter book description" name="description" defaultValue={this.props.currentBooks.description} />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formst">
            <Form.Label>Status:</Form.Label>
            <Form.Select id="status" defaultValue={this.props.currentBooks.status}>
          <option>Open books status menu and choose one </option>
          <option value="Novel">Novel</option>
          <option value="Science">Science</option>
          <option value="Literature">Literature</option>
          <option value="Other">Other</option>
        </Form.Select>
            </Form.Group>
    
            <Button variant="primary" type="submit">
                  Update Book Now 📚
                </Button>
    
            </Form>
            </Modal.Body>
    
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleCloseUpdate}>
                Close
              </Button>
              </Modal.Footer>
    
    
    
            </Modal>

        )
    }
}

export default UpdateModal;