import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';

const ScholarshipComponent = () => {
  return (
    <>
    <Helmet>
        <title>Scholarship | Wow Global Studies</title>
    </Helmet>
    <div className='h-24 bg-purple-800'></div>
    <div className="free-counselling-container">
            <div className="section intro">
                <h1>Expert Guidance Tailored to Your Needs</h1>
            </div>

            <div className="section why-choose-us">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Personalized Guidance from Experienced Consultants</li>
                    <li>Comprehensive Assessment of Your Visa Options</li>
                    <li>Clear Pathway to Achieving Your Study or Career Goals</li>
                </ul>
            </div>

            <div className="section what-to-expect">
                <h2>What to Expect</h2>
                <ol>
                    <li><strong>Initial Consultation:</strong> Discuss your aspirations and concerns.</li>
                    <li><strong>Assessment:</strong> Evaluate your eligibility and best visa options.</li>
                    <li><strong>Guidance:</strong> Receive tailored advice and recommendations.</li>
                    <li><strong>Follow-up:</strong> Continued support throughout your application process.</li>
                </ol>
            </div>

            <div className="section cta">
                <button className="cta-button">Book Your Free Counselling Session Now</button>
            </div>

            <div className="section contact-info">
                <h2>Contact Information</h2>
                <p>Phone: 123-456-7890</p>
                <p>Email: info@visaconsultancy.com</p>
                <p>Location: 123 Main Street, City, Country</p>
            </div>
        </div>
    </>
  );
};

export default ScholarshipComponent;
