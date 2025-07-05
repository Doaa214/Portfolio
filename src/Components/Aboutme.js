import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage  text="Networking" />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Networking Diploma </h3>
          <p style={{ color: 'black'}}>"CCNA-certified networking professional with a strong
 foundation in routing, switching, and troubleshooting."
 "Hands-on experience configuring Cisco routers,
 switches, and VLANs in lab and real-world
 environments."
 Understanding of networking concepts (TCP/IP, DNS,
 HTTP/HTTPS).</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Front_End" />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Front_End Diploma </h3>
          <p style={{ color: 'black'}}> Proficient in HTML, CSS, JavaScript, and modern
 frameworks like React.js
 Skilled in creating responsive, user-friendly, and
 accessible web applications.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="IC3" />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}> IC3 Diploma</h3>
          <p style={{ color: 'black'}}>
           Proficient in Microsoft Office Suite (Word, Excel,
 PowerPoint) and Google Workspace tools.
 knowledge of Microsoft Office Suite, Google
 Workspace, and cloud-based collaboration tools
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;