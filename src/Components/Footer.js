import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

// You'll likely need icons for the social media links and the email input.
// Let's use React Icons (Font Awesome) as an example, as it's a good practice.
import { FaEnvelope} from 'react-icons/fa';

function FooterSection() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-light py-5"> {/* bg-light for a subtle background, py-5 for padding */}
      <Container>
        {/* Main Title and Subscription Form */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8} lg={6}>
            <h3 className="mb-3 fs-2 fw-bold">Portfolio Do</h3> {/* Adjust font size as needed */}
            <p className="lead mb-4">Stay updated with my latest projects</p>

            <Form className="d-flex justify-content-center">
              <InputGroup className="mb-3 w-75"> {/* w-75 to control input width */}
                <InputGroup.Text>
                  <FaEnvelope /> {/* Envelope icon */}
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        {/* Bottom Section: Language, Copyright, Social Media */}
        <hr className="my-4" /> {/* Horizontal line separator */}

        <Row className="align-items-center">
          

        </Row>
      </Container>
    </footer>
  );
}

export default FooterSection;
