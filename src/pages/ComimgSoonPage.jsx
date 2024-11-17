import React from 'react';

const ComingSoonPage = () => {
  return (
    <div className="bg-purple-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-8">We are working hard on our website and we'll be ready to launch soon. In the meantime, feel free to reach out to us directly.</p>
        <div className="mb-8">
          <p className="text-gray-700">Contact Us:</p>
          <p className="text-gray-700">Email: info@yourcompany.com</p>
          <p className="text-gray-700">Phone: +123 456 7890</p>
        </div>
        <p className="text-gray-600">Stay tuned!</p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
