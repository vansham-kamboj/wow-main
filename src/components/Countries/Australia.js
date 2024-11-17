import React from 'react';
import Helmet from 'react-helmet';

const AustraliaComponent = () => {
  return (
    <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Australia | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
    <div className='w-full h-24 max-sm:h-0 max-sm:bg-white bg-purple-700'></div>
    <div className="flex flex-col lg:flex-row lg:px-80 pt-20 lg:pt-40">
      {/* Left Column */}
      <img src="https://www.go.study/assets/australia/study-in-australia.jpg" className="absolute top-44 left-40 h-40 w-[20rem] max-sm:static max-sm:w-full  rounded-lg mix-blend-multiply filter opacity-70" alt="Study in Australia" />
      <div className="relative lg:w-1/3">
        
        <div className="p-4">
          <h2 className="text-4xl max-sm:pt-30 text-purple-900 font-extrabold">WANT TO STUDY IN AUSTRALIA</h2>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <div className="p-4">
          {/* Scrollable text content */}
          <p className="text-lg font-semibold">Why Study in Australia?</p>
          <p>
            Australia is known for its world-class education system, diverse culture, and stunning landscapes. With top-ranked universities and innovative research opportunities, studying in Australia offers an enriching academic experience and prepares students for success in a globalized economy.
          </p>
          <p className="text-lg font-semibold">Benefits of Choosing Us:</p>
          <p>
            As your study visa consultancy, we provide personalized assistance and guidance to help you navigate the process of studying in Australia. From course selection to visa application, our experienced counselors are committed to supporting your educational journey and ensuring a smooth transition to life in Australia.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AustraliaComponent;
