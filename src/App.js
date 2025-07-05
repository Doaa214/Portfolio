// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UncontrolledExample from './Components/Aboutme';
import ExpertiseSection from './Components/Expertise';
import FooterSection from './Components/Footer';
import ProfileHero from './Components/Home';
// import Portfolio from './Components/Home';
import ColorSchemesExample from './Components/Nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Certificates from './Components/Cards';
import ContactSection from './Components/contact';



function App() {
  return (
     <Router>
      <div>
        <ColorSchemesExample /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProfileHero />
                <ExpertiseSection />
              </>
            }
          />
           <Route
            path="/about"
            element={
              <>
                <UncontrolledExample />
                <Certificates />
              </>
            }
          />
          <Route path='/contact' element={<ContactSection />}></Route>
        </Routes>
        <FooterSection /> 
      </div>
    </Router>
  );
}

export default App;
