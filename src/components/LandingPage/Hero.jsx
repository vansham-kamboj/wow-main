import React, { useState, useEffect } from 'react';
import HeroImg from "../../assets/images/hero.png";
import {Helmet} from 'react-helmet'
import background from "../../assets/images/bg-img.png";
import blob from "../../assets/images/blob.svg"
import bgsvg from "../../assets/images/bg-svg.png";


const NumberCounter = ({ targetStudents, targetInstitutes }) => {
  const [countStudents, setCountStudents] = useState(0);
  const [countInstitutes, setCountInstitutes] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const interval = 50; // Interval in milliseconds
    const steps = duration / interval;
    const incrementStudents = targetStudents / steps;
    const incrementInstitutes = targetInstitutes / steps;

    let counterStudents = 0;
    let counterInstitutes = 0;

    const timer = setInterval(() => {
      counterStudents += incrementStudents;
      setCountStudents(Math.min(Math.ceil(counterStudents), targetStudents));

      counterInstitutes += incrementInstitutes;
      setCountInstitutes(Math.min(Math.ceil(counterInstitutes), targetInstitutes));

      if (counterStudents >= targetStudents && counterInstitutes >= targetInstitutes) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetStudents, targetInstitutes]);

  return (


    <div className="flex items-center">

      <div className="mr-8">
        <span className="text-3xl font-bold text-white">{countStudents}+</span><br></br>
        <span className="text-white font-thin max-sm:font-light text-xl"> Students</span>
      </div>
      <div>
        <span className="text-3xl font-bold text-white">{countInstitutes}+</span><br></br>
        <span className="text-white font-thin max-sm:font-light text-xl"> Partner Universities</span><br></br>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="flex bg overflow-clip bg-purple-800 max-sm:h-1 min-h-screen px-16 max-sm:px-1">
      <div className="relative w-full">
        <img className='absolute -left-40 top-[24rem] size-[30rem] opacity-50' src={ blob } alt="" />
        <img className='absolute -right-80 top-[24rem] size-[25rem] opacity-50' src={ blob } alt="" />
        <img className='absolute -right-80 -top-40 rotate-90 size-[30rem] opacity-50' src={ blob } alt="" />


        <img className='absolute right-40 top-40 size-[29rem] opacity-80' src={ bgsvg } alt="" />
        


        <div class="m-2 relative space-y-4">
        <div className="container mt-20 z-10 mx-auto px-4 md:px-8 py-12 md:py-24 max-sm:h-10 flex flex-col md:flex-row items-center justify-between">
          {/* Content on the left */}
          <div className="w-full md:w-1/2 max-md:w-">
            <div
              className="delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0"
              data-taos-offset="400"
            >
              <h1 className="text-left animate-fade-up text-[3rem] -mb-1 max-sm:mb-2 max-sm:font-extrabold font-bold text-white leading-tight ">
                Chase Your Dreams <span className='heading'>Abroad</span>
              </h1>
              <h2 className="animate-fade-up text-xl max-sm:font-bold lg:text-5xl max-sm:text-3 xl font-bold text-white leading-tight ">
                  We Handle the Rest!
              </h2>
            </div>

            <p className="text-base max-md:text-xl lg:text-xl text-gray-300 animate-fade animate-once">
              Embark on an educational journey and expand your horizons with GlobalEd. We provide personalized study abroad programs, connecting students with top universities around the globe.
            </p>
            <div className="text-4xl font-bold text-blue-500">
              <NumberCounter targetStudents={100} targetInstitutes={10} />
            </div>
            <div className="px-1 py-10">
      <div className="grid justify-start">
        <div className="relative group">
          <button className="relative px-7 transition  hover:scale-105 py-3 border-2 text-white font-bold  border-white bg-transparent rounded-full leading-none flex items-center divide-x divide-gray-600">
            Apply Now
          </button>
        </div>
      </div>
    </div>
          </div>

          {/* Image on the right */}
          <div className="transition ease-in-out transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 max-sm:hidden mr-20 z-20 w-full md:w-1/3">
            <img src={HeroImg} alt="Hero Image" className="w-full h-auto " />
          </div>
        </div>
      </div>
    </div>
    <style>
      {`
      h1{
        font-family: 'Satoshi', sans-serif;
      }
      .bg{
        background-size: cover;
        
      }
      .heading{
        background-color:#8B35D1;
        color:white;
        border-radius:10px;
      }
      `}
    </style>
  </div>
  );
};

export default Hero;
