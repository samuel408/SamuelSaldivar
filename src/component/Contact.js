import React, {useState}from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Modal, Button, Form } from 'react-bootstrap';

function Contact({ show, handleClose }) {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    // Make a POST request to your server's API endpoint
    fetch( process.env.BACK_END_ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        handleClose(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };
    const buttonSubmit={
        color: '#E6E2DD',
        backgroundColor: '#D48166'
    };
    const buttonClose={
        color: '#E6E2DD',
        backgroundColor: '#373A36'
    };

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your contact form goes here */}
          <Form>
            {/* Name */}
            <Form.Group controlId="formName">
  <Form.Label>Name</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter your name"
    name="name"  // Add the name attribute
    value={formData.name}  // Bind the value to state
    onChange={handleInputChange}  // Handle changes
  />
</Form.Group>
       {/* email */}
       <Form.Group controlId="formEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control
           type="email"
           placeholder="Enter your email"
           name="email"  // Add the name attribute
           value={formData.email}  // Bind the value to state
           onChange={handleInputChange}  // Handle changes
         />
       </Form.Group>
       {/* message */}
       <Form.Group controlId="formMessage">
         <Form.Label>Message</Form.Label>
         <Form.Control
           as="textarea"
           rows={3}
           placeholder="Enter your message"
           name="message"  // Add the name attribute
           value={formData.message}  // Bind the value to state
           onChange={handleInputChange}  // Handle changes
         />
</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={buttonClose} onClick={handleClose}>
            Close
          </Button>
          <Button style={buttonSubmit} onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default Contact;