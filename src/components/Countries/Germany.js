import React from 'react';
import Helmet from 'react-helmet';

const GermanyComponent = () => {
  return (
    <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Germany | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
    <div className='w-full h-24 max-sm:h-0 max-sm:bg-white bg-purple-700'></div>
    <div className="flex flex-col lg:flex-row lg:px-80 pt-20 lg:pt-40">
      {/* Left Column */}
      <img src="https://a.cdn-hotels.com/gdcs/production133/d1829/743b2f60-bb25-11e8-a095-0242ac11000d.jpg" className="absolute top-44 left-40 h-40 w-[20rem] max-sm:static max-sm:w-full  rounded-lg mix-blend-multiply filter opacity-70" alt="Study in Germany" />
      <div className="relative lg:w-1/3">
        
        <div className="p-4">
          <h2 className="text-4xl max-sm:pt-30 text-purple-900 font-extrabold">WANT TO STUDY IN GERMANY</h2>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <div className="p-4">
          {/* Scrollable text content */}
          <p className="text-lg font-semibold">Why Study in Germany?</p>
          <p>
            Germany is known for its world-class education system, strong emphasis on research and innovation, and vibrant cultural scene. With tuition-free education at public universities and a wide range of programs taught in English, studying in Germany offers excellent academic opportunities and cultural experiences.
          </p>
          <p className="text-lg font-semibold">Benefits of Choosing Us:</p>
          <p>
            As your study visa consultancy, we provide personalized guidance and support to help you navigate the process of studying in Germany. From university applications to visa processing, our experienced counselors are committed to assisting you in achieving your academic and career aspirations in Germany.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default GermanyComponent;
