import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import heroimg from "../../assets/images/undraw_environmental_study_re_q4q8.svg";
import { FaCheckCircle } from 'react-icons/fa'; // Import the checkmark icon

const LoanRedirectSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-purple-50 px-10 py-10">
      <div ref={ref} className="flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <img className="object-cover w-full h-64 md:h-auto" src={heroimg} alt="Visa Consultancy" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 md:text-left"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl w-[40rem] max-md:w-80 max-md:text-2xl leading-tight max-md:text-center text-left font-bold text-purple-700 mb-4">
            Navigate Your Dreams: From Visa to Victory, Loan to Launch
          </h2>
          {/* Paragraph */}
          <p className="max-md:text-center text-gray-700 mb-6">
            Discover the benefits of our study loans designed to make your education journey smoother:
          </p>
          {/* List Section */}
          <ul className="list-none text-gray-700 mb-6 space-y-4">
            <li className="flex items-center ml-6">
              <FaCheckCircle className="text-purple-600 mr-3" />
              Affordable Rates
            </li>
            <li className="flex items-center ml-6">
              <FaCheckCircle className="text-purple-600 mr-3" />
              Comprehensive Coverage
            </li>
            <li className="flex items-center ml-6">
              <FaCheckCircle className="text-purple-600 mr-3" />
              Flexible Repayment
            </li>
            <li className="flex items-center ml-6">
              <FaCheckCircle className="text-purple-600 mr-3" />
              Quick Processing
            </li>
            <li className="flex items-center ml-6">
              <FaCheckCircle className="text-purple-600 mr-3" />
              Simple Application
            </li>
          </ul>
          {/* Button */}
          <button className="px-6 py-3 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LoanRedirectSection;
