import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/images/logo-darkBg.png'; // Adjust path as necessary

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex flex-col md:w-1/2 items-center md:items-start mb-8 md:mb-0 md:mr-8"> {/* Added margin-right for spacing */}
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start mb-8">
              <img src={logo} alt="Logo" className="w-32 mb-2" />
              <p className="text-lg font-semibold">Empowering Your Future</p>
            </div>

            {/* Map iframe */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.196175676758!2d73.19395687474845!3d22.270557443973885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc597727fcb75%3A0xcf89972d49813e50!2sWow%20Global%20Studies......%20Best%20Study%20Abroad%20Consultant!5e0!3m2!1sen!2sin!4v1725814660349!5m2!1sen!2sin"
                className="w-full h-64 border-none"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.196175676758!2d73.19395687474845!3d22.270557443973885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc597727fcb75%3A0xcf89972d49813e50!2sWow%20Global%20Studies......%20Best%20Study%20Abroad%20Consultant!5e0!3m2!1sen!2sin!4v1725814660349!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col md:flex-row justify-between">
              {/* Services Section */}
              <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <a href="/about" className="block mb-2 text-gray-200 no-underline hover:underline">Free Counselling</a>
                <a href="/careers" className="block mb-2 text-gray-200 no-underline hover:underline">Application Process</a>
                <a href="/contact" className="block mb-2 text-gray-200 no-underline hover:underline">Financial Aid</a>
                <a href="/contact" className="block mb-2 text-gray-200 no-underline hover:underline">Viza Assesement</a>
                <a href="/contact" className="block mb-2 text-gray-200 no-underline hover:underline">Interview Prepration </a>
                <a href="/contact" className="block mb-2 text-gray-200 no-underline hover:underline">Air Ticket</a>
                <a href="/contact" className="block mb-2 text-gray-200 no-underline hover:underline">Post Viza Services</a>
              </div>
              
              {/* Coaching Section */}
              <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">Coaching</h3>
                <a href="/home-loans" className="block mb-2 text-gray-200 no-underline hover:underline">IELTS Academic / IELTS General</a>
                <a href="/study-loans" className="block mb-2 text-gray-200 no-underline hover:underline">GRE</a>
                <a href="/consultation" className="block mb-2 text-gray-200 no-underline hover:underline">PTE</a>
                <a href="/consultation" className="block mb-2 text-gray-200 no-underline hover:underline">Duolingo English Test</a>
                <a href="/consultation" className="block mb-2 text-gray-200 no-underline hover:underline">SAT</a>
                <a href="/consultation" className="block mb-2 text-gray-200 no-underline hover:underline">TOEFL - IBT</a>
              </div>

              {/* Countries Section */}
              <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">Countries</h3>
                <a href="/faq" className="block mb-2 text-gray-200 no-underline hover:underline">USA</a>
                <a href="/blog" className="block mb-2 text-gray-200 no-underline hover:underline">CANADA</a>
                <a href="/support" className="block mb-2 text-gray-200 no-underline hover:underline">UK</a>
                <a href="/support" className="block mb-2 text-gray-200 no-underline hover:underline">Australia</a>
                <a href="/support" className="block mb-2 text-gray-200 no-underline hover:underline">New Zealand</a>
                <a href="/support" className="block mb-2 text-gray-200 no-underline hover:underline">Germany</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-purple-900 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} WOW GLOBAL STUDIES. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF className="text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn className="text-white hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
