import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const certificates = [
  {
    title: 'IC3 Diploma',
    img: '/ic3.png',
    pdf: '/ic3doaa.pdf',
  },
  {
    title: 'Network trainning',
    img: '/trainnet.png',
    pdf: '/networktrain.pdf',
  },
  {
    title: 'Network Diploma',
    img: '/coursenet.png',
    pdf: '/networkcourse.pdf',
  },
];

function Certificates() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Certificates</h2>
      <Row>
        {certificates.map((cert, index) => (
          <Col md={4} sm={12} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={cert.img}
                alt={cert.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{cert.title}</Card.Title>
                <Button
                  variant="primary"
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  View Certificate (PDF)
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;
