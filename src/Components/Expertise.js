import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { FaCode, FaNetworkWired, FaLaptopCode} from 'react-icons/fa';



// Reusable component for a single skill item
const SkillItem = ({ icon, text }) => (
  <div className="d-flex align-items-center mb-2">
    <span className="me-2 text-muted" style={{ fontSize: '1.2rem' }}>{icon}</span> {/* Use the React Icon component directly */}
    <span className="fw-medium">{text}</span>
  </div>
);

// Component for a single expertise category box
const ExpertiseCategoryCard = ({ title, skills, iconType = 'code' }) => {
  const getIconComponent = (type) => {
    switch (type) {
      case 'code':
        return <FaCode />; // Example: Font Awesome Code icon
      case 'network':
        return <FaNetworkWired />; // Example: Font Awesome Network icon
      case 'productivity':
        return <FaLaptopCode />; // Example: Font Awesome Laptop Code icon
      default:
        return null;
    }
  };

  return (
    <Col lg={4} md={6} sm={12} className="mb-4">
      <Card className="shadow-sm p-4 h-100">
        <Card.Body>
          <Card.Title className="text-center mb-4 fs-4 fw-bold">{title}</Card.Title>
          <Row xs={1} sm={2} md={iconType === 'productivity' ? 2 : 1} lg={iconType === 'web' || iconType === 'network' ? 3 : 2} className="g-3">
            {skills.map((skill, index) => (
              <Col key={index}>
                <SkillItem icon={getIconComponent(iconType)} text={skill} />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Main component for the entire Expertise & Abilities section (remains the same)
function ExpertiseSection() {
  const webSkills = [
    'HTML', 'CSS', 'JavaScript',
    'React',  'bootstrap CSS',
    'TypeScript',
  ];

  const networkingSkills = [
    'TCP/IP', 'VLANs', 'Cisco Routers',
      'OSI Model','Subnetting', 
  ];

  const productivitySkills = [
    'Microsoft Office', 'Google Workspace', 'Research',
    'Technical skills', 'VS Code', 'Organization',
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5 fs-2 fw-bolder">Expertise & Abilities</h2>
        <Row className="justify-content-center">
          <ExpertiseCategoryCard
            title="Web Development"
            skills={webSkills}
            iconType="code"
          />
          <ExpertiseCategoryCard
            title="Networking"
            skills={networkingSkills}
            iconType="network"
          />
          <ExpertiseCategoryCard
            title="Productivity"
            skills={productivitySkills}
            iconType="productivity"
          />
        </Row>
      </Container>
    </section>
  );
}

export default ExpertiseSection;