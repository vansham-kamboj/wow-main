import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/images/logo-darkBg.png'; // Adjust path as necessary

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py  -8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="w-32 mb-2" />
          <p className="text-lg font-semibold">Empowering Your Future</p>
        </div>

        {/* Map and Links Section */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row">
          {/* Map iframe */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.883949084362!2d-122.4194184846819!3d37.77492927975929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e6ff9cf27%3A0x3f4c63e9e9c8e9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1638437304145!5m2!1sen!2sus"
              className="w-full h-64 border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <a href="/about" className="mb-2 hover:underline">About Us</a>
              <a href="/careers" className="mb-2 hover:underline">Careers</a>
              <a href="/contact" className="mb-2 hover:underline">Contact</a>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <a href="/home-loans" className="mb-2 hover:underline">Home Loans</a>
              <a href="/study-loans" className="mb-2 hover:underline">Study Loans</a>
              <a href="/consultation" className="mb-2 hover:underline">Consultation</a>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <a href="/faq" className="mb-2 hover:underline">FAQ</a>
              <a href="/blog" className="mb-2 hover:underline">Blog</a>
              <a href="/support" className="mb-2 hover:underline">Support</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
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
