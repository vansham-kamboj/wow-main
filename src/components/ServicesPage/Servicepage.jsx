import React from 'react';
import './Services.css';

const services = [
    {
        title: 'Free Counselling',
        description: 'Personalized guidance from experienced consultants to help you navigate your visa options.',
        link: '/free-counselling'
    },
    {
        title: 'Application Process',
        description: 'Step-by-step support through the entire visa application process.',
        link: '/application-process'
    },
    {
        title: 'Financial Aid',
        description: 'Explore your options for financial support including scholarships, loans, and grants.',
        link: '/financial-aid'
    },
    {
        title: 'Visa Assessment',
        description: 'Determine your visa eligibility with a comprehensive assessment.',
        link: '/visa-assessment'
    },
    {
        title: 'Interview Preparation',
        description: 'Prepare confidently for your visa interview with our expert guidance.',
        link: '/interview-preparation'
    },
    {
        title: 'Air Ticket',
        description: 'Simplify your travel arrangements with our air ticket booking service.',
        link: '/air-ticket'
    }
];

const Services = () => {
    return (
        <>
        <div className="bg-top bg-purple-800"></div>
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <a href={service.link} className="service-link">Learn More</a>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Services;
