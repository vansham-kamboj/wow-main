import React, { useState, useEffect } from 'react';

const BtmNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={`fixed bottom-0 left-1/2 z-50 transform -translate-x-1/2 transition-transform duration-300 ease-in-out ${isVisible ? '-translate-y-2' : 'translate-y-full'} bg-black text-white py-2 rounded-full shadow-lg w-11/12 md:w-2/5`}>
      <div className="flex justify-between items-center relative text-sm md:text-base px-4">
        <a href="/home" className="hover:text-purple-300">Home</a>

        <div className="relative">
          <button 
            onClick={() => handleMenuClick('services')} 
            className="hover:text-purple-300"
          >
            Services
          </button>
          {openMenu === 'services' && (
            <div className="absolute bottom-full left-0 mb-2 w-40 bg-black text-white rounded shadow-lg z-50">
              <a href="#service1" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Service 1</a>
              <a href="#service2" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Service 2</a>
              <a href="#service3" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Service 3</a>
            </div>
          )}
        </div>

        <div className="relative">
          <button 
            onClick={() => handleMenuClick('coaching')} 
            className="hover:text-purple-300"
          >
            Coaching
          </button>
          {openMenu === 'coaching' && (
            <div className="absolute bottom-full left-0 mb-2 w-40 bg-black text-white rounded shadow-lg z-50">
              <a href="#coaching1" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Coaching 1</a>
              <a href="#coaching2" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Coaching 2</a>
            </div>
          )}
        </div>

        <div className="relative">
          <button 
            onClick={() => handleMenuClick('countries')} 
            className="hover:text-purple-300"
          >
            Countries
          </button>
          {openMenu === 'countries' && (
            <div className="absolute bottom-full left-0 mb-2 w-40 bg-black text-white rounded shadow-lg z-50">
              <a href="#country1" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Country 1</a>
              <a href="#country2" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Country 2</a>
              <a href="#country3" className="block px-4 py-2 hover:bg-purple-700 text-sm md:text-base">Country 3</a>
            </div>
          )}
        </div>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 text-sm md:text-base">Contact</button>
      </div>
    </div>
  );
};

export default BtmNavbar;
