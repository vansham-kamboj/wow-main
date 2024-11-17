import React from 'react';
import Helmet from 'react-helmet';

const CanadaComponent = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Canada | Wow Global Studies</title>
        <meta name="keywords" content="study abroad, international education, global studies, overseas education" />
      </Helmet>
      {/* Header Section */}
      <div className="bg-purple-700 h-24"></div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between lg:px-20 py-16 lg:py-24 space-y-8 lg:space-y-0 lg:space-x-10">
        
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/3 relative">
          <img 
            src="https://www.go.study/assets/canada/study-in-canada.jpg" 
            alt="Study in Canada" 
            className="w-full h-auto rounded-lg shadow-lg opacity-90" 
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-4xl font-extrabold text-purple-700">
            Want to Study in Canada?
          </h1>
          <p className="text-lg leading-relaxed text-gray-800">
            Canada offers excellent education opportunities with a diverse and inclusive environment. Top-notch universities, innovative research facilities, and a high standard of living attract students from around the globe.
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            Moreover, Canada's welcoming culture and emphasis on multiculturalism make it an enriching experience for international students.
          </p>

          <h2 className="text-2xl font-semibold text-purple-700">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            As your trusted study visa consultancy, we provide tailored support for every step of your journey—from consultation to visa processing. Our expert counselors are here to guide you and ensure your smooth transition into Canada's world-class education system.
          </p>
        </div>
      </div>
    </>
  );
};

export default CanadaComponent;
