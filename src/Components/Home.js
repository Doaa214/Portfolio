import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';

const ProfileHero = () => {
  return (
    <div>
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(to bottom, #ccc, #eee)', 
        padding: '3rem',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      
      <Image
        src="/doaa.png" 
        roundedCircle
        style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '1rem' }}
        alt="Profile"
      />

      
      <h1 style={{ fontWeight: '900', fontSize: '2.5rem', marginBottom: '0.2rem' }}>
        Doaa Sobhy
      </h1>

      
      <h5 style={{ color: '#007bff', marginBottom: '1rem' }}>
        Networking & Frontend Developer
      </h5>

      
      <p style={{ maxWidth: '600px', color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
         Computer and Information Technology graduate trained to
 deal with CCNA networks. I have acquired basic computer
 and Internet skills. I have experience in HTML, CSS and JS. I
 seek to obtain certificates in website development.
      </p>

     
    </Container>
    
    <Container>

    </Container>
</div>
    
  );
};

export default ProfileHero;
