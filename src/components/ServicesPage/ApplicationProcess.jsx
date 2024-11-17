import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ApplicationProcess = () => {
  // Refs for the sections
  const servicesSection = useRef(null);
  const chooseUsSection = useRef(null);
  const quoteSection = useRef(null);

  useEffect(() => {
    // "Our Services" section animation
    gsap.fromTo(
      servicesSection.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesSection.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // "Why Choose Us" section animation
    gsap.fromTo(
      chooseUsSection.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: chooseUsSection.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Quote section animation
    gsap.fromTo(
      quoteSection.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: quoteSection.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Our Services Section */}
      <section ref={servicesSection} className="h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-purple-800">Application Process</h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Applying to universities abroad can be overwhelming. Let us handle the details for you. Our application process service ensures that your applications are error-free, complete, and submitted on time, giving you the best chance of success.
            </p>
            <button className="mt-6 px-6 py-3 bg-purple-800 text-white text-lg rounded-md hover:bg-purple-700 transition duration-300">
              Get Started
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://via.placeholder.com/600x400" alt="Application Process" className="rounded-md shadow-md" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={chooseUsSection} className="h-screen bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
            <img src="https://via.placeholder.com/600x400" alt="Why Choose Us" className="rounded-md shadow-md" />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-4xl font-bold text-purple-800">Why Choose Us?</h3>
            <ul className="mt-4 text-lg text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
              <li>Comprehensive application support from start to finish.</li>
              <li>Step-by-step guidance to avoid common pitfalls.</li>
              <li>Timely submission for increased chances of acceptance.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcess;
