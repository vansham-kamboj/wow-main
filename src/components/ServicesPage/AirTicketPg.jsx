import React from 'react';

const AirTicketBooking = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center rounded-lg shadow-lg mb-12" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Book Your Flight Today</h1>
            <p className="text-2xl">Hassle-free ticket booking for your study abroad journey</p>
            <button className="mt-8 px-8 py-4 bg-purple-700 text-lg rounded-md hover:bg-purple-600 transition">Get Started</button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <img src="https://via.placeholder.com/200x200" alt="Affordable Flights" className="rounded-full shadow-md mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Affordable Flights</h3>
            <p className="text-lg text-gray-600">Get the best deals for students on international flights.</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/200x200" alt="Easy Rescheduling" className="rounded-full shadow-md mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">Easy Rescheduling</h3>
            <p className="text-lg text-gray-600">Flexible options in case of schedule changes.</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/200x200" alt="24/7 Support" className="rounded-full shadow-md mb-4" />
            <h3 className="text-2xl font-bold text-gray-800">24/7 Support</h3>
            <p className="text-lg text-gray-600">Our team is here to assist you at any time of the day.</p>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Ticket Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Economy Class</h3>
              <p className="text-lg text-gray-700">Affordable tickets with all the essentials for a smooth journey.</p>
              <p className="text-4xl font-bold text-gray-800 mt-4">$499</p>
              <button className="mt-6 w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition">Book Now</button>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Business Class</h3>
              <p className="text-lg text-gray-700">Experience premium comfort with added amenities.</p>
              <p className="text-4xl font-bold text-gray-800 mt-4">$899</p>
              <button className="mt-6 w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition">Book Now</button>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">First Class</h3>
              <p className="text-lg text-gray-700">The ultimate luxury for a comfortable, seamless travel experience.</p>
              <p className="text-4xl font-bold text-gray-800 mt-4">$1499</p>
              <button className="mt-6 w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition">Book Now</button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                "Booking my flight was incredibly easy, and the prices were unbeatable! I highly recommend their services."
              </p>
              <p className="mt-4 font-bold text-purple-600">- Jane Smith</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                "I had to reschedule my flight last minute, and their customer support was fantastic! Very helpful and efficient."
              </p>
              <p className="mt-4 font-bold text-purple-600">- John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTicketBooking;
