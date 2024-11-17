import React from 'react';
import Helmet from 'react-helmet';



const USAComponent = () => {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>USA | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
    <div className='w-full h-24 max-sm:h-0 max-sm:bg-white bg-purple-700'></div>
    <div className="flex flex-col lg:flex-row lg:px-80 pt-20 lg:pt-40">
      {/* Left Column */}
      <img src="https://www.go.study/assets/usa/study-in-usa.jpg" className="absolute top-44 left-40 h-40 w-[20rem] max-sm:static max-sm:w-full  rounded-lg mix-blend-multiply filter opacity-70" alt="Study in USA" />
      <div className="relative lg:w-1/3">
        
        <div className="p-4">
          <h2 className="text-4xl max-sm:pt-30 text-purple-900 font-extrabold">WANT TO STUDY IN USA</h2>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <div className="p-4">
          {/* Scrollable text content */}
          <p className="text-lg font-semibold">Why Study in USA?</p>
          <p>
            The USA offers a diverse range of educational opportunities, cutting-edge research facilities, and a dynamic learning environment. Renowned for its academic excellence and innovation, studying in the USA prepares students for success in a globalized world.
          </p>
          <p className="text-lg font-semibold">Benefits of Choosing Us:</p>
          <p>
            As your study visa consultancy, we offer comprehensive support tailored to your needs, ensuring a smooth transition to studying in the USA. From university applications to visa assistance, our expert counselors are dedicated to helping you achieve your academic and career goals in the USA.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default USAComponent;
