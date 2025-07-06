import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false); // for showing success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xwpbjwwl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSuccess(false), 4000); // Hide success message after 4 seconds
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8} lg={6}>
            <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
            <p className="lead text-muted">
              I'd love to hear from you. Whether you have a question, a project idea, or just
              want to say hello, feel free to reach out.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center g-4">
          {/* Form Column */}
          <Col lg={6} md={10}>
            <Card className="shadow-sm h-100">
              <Card.Body className="p-4">
                <Card.Title className="h4 mb-4">Send Me a Message</Card.Title>
                <p className="text-muted mb-4">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                {/* Success Alert */}
                {success && (
                  <Alert variant="success">
                    Message sent successfully!
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Doaa Harras"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="harras.doe@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Type your message here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info Column */}
          <Col lg={4} md={10}>
            <Card className="shadow-sm h-100">
              <Card.Body className="p-4">
                <Card.Title className="h4 mb-4">Let's Connect</Card.Title>
                <p className="text-muted mb-4">
                  Ready to turn ideas into reality? Whether you have a project in mind, a
                  collaboration opportunity, or just want to chat about tech, I'm eager to hear
                  from you.
                </p>

                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <FaEnvelope size={20} className="me-3 text-primary" />
                    <a href="mailto:harrasdoaa@gmail.com" className="text-decoration-none text-dark">
                      harrasdoaa@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <FaWhatsapp size={20} color="green" className="me-3 text-primary" />
                    <a
                      href="https://wa.me/201050688345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>

                <p className="mt-4 text-muted">Looking forward to connecting!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;

