import React from 'react';
import Helmet from 'react-helmet';

const NewZealandComponent = () => {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>New Zealand | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
    <div className='w-full h-24 max-sm:h-0 max-sm:bg-white bg-purple-700'></div>
    <div className="flex flex-col lg:flex-row lg:px-80 pt-20 lg:pt-40">
      {/* Left Column */}
      <img src="https://www.go.study/assets/new-zealand/study-in-new-zealand.jpg" className="absolute top-44 left-40 h-40 w-[20rem] max-sm:static max-sm:w-full  rounded-lg mix-blend-multiply filter opacity-70" alt="Study in New Zealand" />
      <div className="relative lg:w-1/3">
        
        <div className="p-4">
          <h2 className="text-4xl max-sm:pt-30 text-purple-900 font-extrabold">WANT TO STUDY IN NEW ZEALAND</h2>
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <div className="p-4">
          {/* Scrollable text content */}
          <p className="text-lg font-semibold">Why Study in New Zealand?</p>
          <p>
            New Zealand offers a unique blend of academic excellence, natural beauty, and cultural diversity. With a focus on innovation and hands-on learning, studying in New Zealand provides students with the skills and knowledge to succeed in a rapidly changing world.
          </p>
          <p className="text-lg font-semibold">Benefits of Choosing Us:</p>
          <p>
            As your study visa consultancy, we offer personalized support and guidance to help you pursue your educational goals in New Zealand. From university applications to visa assistance, our dedicated counselors are here to assist you at every step of the way.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewZealandComponent;
