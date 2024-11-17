import React from 'react';
import img from '../../assets/images/free-con.png';

const FreeCounseling = () => {
  return (
    <div className="min-h-screen pt-10 bg-purple-200 text-purple-900">
      {/* Page 1: Service Overview */}
      <section className="h-screen flex flex-col justify-center items-center bg-purple-200 p-8">
        <h1 className="text-4xl font-bold mb-6">Free Counseling</h1>
        <p className="text-xl mb-4 text-center max-w-4xl">
          We understand the challenges of choosing the right path for studying abroad. Our free counseling service is designed to help you navigate these challenges with ease.
        </p>
        <p className="text-xl mb-8 text-center max-w-4xl">
          Whether you need advice on selecting a country, course, or university, our expert counselors are here to guide you every step of the way.
        </p>
        <img
          src={img}
          alt="Counseling session"
          className="max-w-2xl"
        />
      </section>

      {/* Page 2: Benefits & Quote */}
      <section className="h-screen flex flex-col justify-center items-center bg-purple-300 p-8">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="text-lg mb-6 text-center max-w-2xl list-disc list-inside">
          <li>Expert guidance from seasoned professionals</li>
          <li>Personalized advice tailored to your goals</li>
          <li>Comprehensive support from start to finish</li>
        </ul>
        <blockquote className="text-2xl italic text-center max-w-2xl text-purple-700 mt-6">
          "Much more to gooo"
        </blockquote>

      </section>
    </div>
  );
};

export default FreeCounseling;
