import React from 'react';

const InterviewPreparation = () => {
  return (
    <div className="flex flex-col">
      {/* Our Services Section */}
      <section className="h-screen bg-purple-100 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-extrabold text-purple-700">Interview Preparation</h2>
            <p className="mt-6 text-2xl text-gray-700">
              Stand out in your college interview with confidence. Our interview preparation service offers mock interviews, feedback, and tips tailored to the questions commonly asked by universities abroad.
            </p>
            <button className="mt-8 px-8 py-4 bg-purple-700 text-white text-xl rounded-md hover:bg-purple-600">
              Schedule Your Mock Interview
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://via.placeholder.com/600x400" alt="Interview Preparation" className="rounded-md shadow-lg" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
            <img src="https://via.placeholder.com/600x400" alt="Why Choose Us" className="rounded-md shadow-lg" />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-4xl font-bold text-purple-600">Why Choose Us?</h3>
            <ul className="mt-6 text-2xl text-gray-700 list-disc list-inside space-y-4">
              <li>Comprehensive mock interview sessions with personalized feedback.</li>
              <li>Practice with commonly asked questions and scenarios.</li>
              <li>Build confidence and improve your communication skills.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      >
        <blockquote className="text-4xl italic text-white bg-purple-800 bg-opacity-75 p-8 rounded-md">
          "The only way to do great work is to love what you do."
        </blockquote>
      </section>
    </div>
  );
};

export default InterviewPreparation;
