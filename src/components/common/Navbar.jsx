import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logoLight from '../../assets/images/logo-darkBg.png';
import logoDark from '../../assets/images/logo-lightBg.png';

function CustomNavbar() {
  const location = useLocation();

  // Determine the navbar style based on the current route
  const getNavbarStyle = () => {
    switch(location.pathname) {
      case '/Australia':
        return 'navbar-home';
      case '/about':
        return 'navbar-about';
      case '/contact':
        return 'navbar-contact';
      default:
        return 'navbar-default';
    }
  };

  const navbarStyle = getNavbarStyle();

  const [navbarBg, setNavbarBg] = useState('black');
  const [logoSrc, setLogoSrc] = useState(logoLight); // Initial logo source
  const [fontColor, setFontColor] = useState('white'); // Initial font color
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCoachingDropdown, setShowCoachingDropdown] = useState(false);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800); // Compare with number directly, without quotes
      // Update navbarBg based on screen width
      setNavbarBg(window.scrollY > 0 || window.innerWidth <= 800 ? 'rgba(88, 28, 135, 0.38)' : '');
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      // Update navbarBg based on scroll position
      setNavbarBg(window.scrollY > 0 || window.innerWidth <= 800 ? 'rgba(88, 28, 135, 0.38)' : '');
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const toggleCoachingDropdown = () => {
    setShowCoachingDropdown(!showCoachingDropdown);
  };

  const toggleCountriesDropdown = () => {
    setShowCountriesDropdown(!showCountriesDropdown);
  };

  return (
    <Navbar className={`px-5 nav-bg ${getNavbarStyle} ${isScrolled || isMobileView ? 'scrolled' : ''}`} expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <img src={isMobileView ? logoLight : logoSrc } className='logoimg' alt="Logo" /> {/* Use dynamic logo source */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="">
            <Link to="/" className='text-decoration-none nav-link' style={{ color: 'white' }}>Home</Link>
          </Nav.Link>
          <Nav.Link href="#services" onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown} className="nav-link" style={{ color: 'white' }}>
            <Link to="/" className='text-decoration-none nav-link' style={{ color: 'white' }}>Services<FontAwesomeIcon className='ml-2' icon={faCaretDown} /></Link>
            {showServicesDropdown && (
              <div className={`dropdown-menu ${isScrolled ? 'scrolled' : ''}`}>
                <Nav.Link href="/counseling">Free Counselling</Nav.Link>
                <Nav.Link href="/Application">Application Process</Nav.Link>
                <Nav.Link href="/FinancePg">Financial Aid</Nav.Link>
                <Nav.Link href="/VisaAssessment">Viza Assesement</Nav.Link>
                <Nav.Link href="/InterviewPreparation">Interview Prepration</Nav.Link>
                <Nav.Link href="/AirTicketPg">Air Ticket</Nav.Link>
                <Nav.Link href="/FinancePg">Post Viza Services</Nav.Link>
              </div>
            )}
          </Nav.Link>
          <Nav.Link href="/" onMouseEnter={toggleCoachingDropdown} onMouseLeave={toggleCoachingDropdown} className="nav-link" style={{ color: 'white' }}>
            <Link to="/" className='text-decoration-none nav-link' style={{ color: 'white' }}>Coaching<FontAwesomeIcon className='ml-2' icon={faCaretDown} /></Link>
            {showCoachingDropdown && (
              <div className={`dropdown-menu ${isScrolled ? 'scrolled' : ''}`}>
                <Nav.Link href="#action/3.1">IELTS Academic / IELTS General</Nav.Link>
                <Nav.Link href="#action/3.2">GRE</Nav.Link>
                <Nav.Link href="#action/3.3">PTE</Nav.Link>
                <Nav.Link href="#action/3.3">Duolingo English Test</Nav.Link>
                <Nav.Link href="#action/3.3">SAT</Nav.Link>
                <Nav.Link href="#action/3.3">TOEFL - IBT</Nav.Link>
              </div>
            )}
          </Nav.Link>
          <Nav.Link href="#countries" onMouseEnter={toggleCountriesDropdown} onMouseLeave={toggleCountriesDropdown} className="nav-link" style={{ color: 'white' }}>
            <Link to="/" className='text-decoration-none nav-link' style={{ color: 'white' }}>Countries<FontAwesomeIcon className='ml-2' icon={faCaretDown} /></Link>
            {showCountriesDropdown && (
              <div className={`dropdown-menu ${isScrolled ? 'scrolled' : ''}`}>
                <Nav.Link href="/USA">USA</Nav.Link>
                <Nav.Link href="/Canada">CANADA</Nav.Link>
                <Nav.Link href="/UK">UK</Nav.Link>
                <Nav.Link href="/Australia">Australia</Nav.Link>
                <Nav.Link href="/New-Zealand">New Zealand</Nav.Link>
                <Nav.Link href="/Germany">Germany</Nav.Link>
              </div>
            )}
          </Nav.Link>
          <Button to="/contact" href='/contact' variant="primary" style={{ color: 'white' }} className="ml-2 border-secondary mt-2 h-10 btn-bl bg-transparent">Inquire Now</Button>
        </Nav>
      </Navbar.Collapse>
      <style>
        {`
          /* Navbar style for home route */
          .navbar-home {
            background-color: black;
            backdrop-filter: blur(40px);
          }

          /* Logo image style */
          .logoimg {
            width: 5rem;
          }

          /* Dropdown menu initial hidden state and styling */
          .dropdown-menu {
            display: none;
            padding: 2rem;
            border: none;
            border-radius: 3px;
            position: absolute;
            background-color: #2727272f;
            backdrop-filter: blur(40px);
            z-index: 9999; /* Ensure dropdown is on top of other content */
            margin-top: 5px;
          }

          /* Show dropdown menu on nav link hover */
          .nav-link:hover .dropdown-menu {
            display: block;
          }

          /* Dropdown menu link styles */
          .dropdown-menu a {
            color: white;
            padding: 10px;
            text-decoration: none;
          }

          /* Dropdown menu link hover styles */
          .dropdown-menu a:hover {
            background-color: #2727272d;
            color: white;
          }

          /* Mobile view styles */
          @media (max-width: 768px) {
            .nav-bg {
              backdrop-filter: blur(10px);
              background-color: rgba(88, 28, 135, 0.38); // Change background color to darker
            }
          }

          /* Navbar and dropdown menu styles when scrolled */
          .nav-bg.scrolled {
            backdrop-filter: blur(40px);
            background-color: rgba(88, 28, 135, 0.50);
          }

          .dropdown-menu.scrolled {
            backdrop-filter: blur(40px);
            background-color: rgba(82, 5, 135, 0.90);
          }
        `}
      </style>
    </Navbar>
  );
}

export default CustomNavbar;
