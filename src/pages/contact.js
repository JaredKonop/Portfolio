import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../styles/contact.css";
import Particle from "../components/Particles";

const ContactMe = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_zv8jvkt",
        "template_c4vt0v6",
        event.target,
        "KmQQTRYatygHSDHkz"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setStatus("SUCCESS");
          event.target.reset();
        },
        (error) => {
          console.error("Error sending email:", error);
          setStatus("ERROR");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-title">
        {" "}
        <h1>Contact Me</h1>
      </div>
      <Container className="contact-me-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" name="phone" placeholder="Optional" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Enter your message"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
        {status === "SUCCESS" && (
          <Alert variant="success" className="mt-3">
            Thank you! Your message has been sent.
          </Alert>
        )}
        {status === "ERROR" && (
          <Alert variant="danger" className="mt-3">
            Oops! There was an error. Please try again.
          </Alert>
        )}
      </Container>
      <div className="linkedin-title">
        {" "}
        <h1>Add Me!</h1>
      </div>
    </div>
  );
};

export default ContactMe;
