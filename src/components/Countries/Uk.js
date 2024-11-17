import React from 'react';
import Helmet from 'react-helmet';

const UKComponent = () => {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>UK | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
    <div className='w-full h-24 max-sm:h-0 max-sm:bg-white bg-purple-700'></div>
    <div className="flex flex-col lg:flex-row lg:px-80 pt-20 lg:pt-40">
      {/* Left Column */}
      <img src="https://www.go.study/assets/uk/study-in-uk.jpg" className="absolute top-44 left-40 h-40 w-[20rem] max-sm:static max-sm:w-full  rounded-lg mix-blend-multiply filter opacity-70" alt="Study in UK" />
      <div className="relative lg:w-1/3">
        
        <div className="p-4">
          <h2 className="text-4xl max-sm:pt-30 text-purple-900 font-extrabold">WANT TO STUDY IN UK</h2>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <div className="p-4">
          {/* Scrollable text content */}
          <p className="text-lg font-semibold">Why Study in UK?</p>
          <p>
            The UK boasts world-renowned universities, a rich cultural heritage, and a vibrant student life. With a focus on academic excellence and innovation, studying in the UK opens doors to exciting opportunities and fosters personal and professional growth.
          </p>
          <p className="text-lg font-semibold">Benefits of Choosing Us:</p>
          <p>
            As your study visa consultancy, we provide personalized guidance and support throughout your journey to study in the UK. From university selection to visa processing, our experienced counselors ensure a seamless transition, empowering you to make the most of your educational experience in the UK.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default UKComponent;
