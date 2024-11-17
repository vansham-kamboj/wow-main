import React from 'react';
import Helmet from 'react-helmet';

const FinanceServices = () => {
  return (
    <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Finance | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
            <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-blue-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
    {/* Hero Image */}
    <div className="md:w-1/2">
      <img src="https://via.placeholder.com/600x400" alt="Financial Aid" className="rounded-md shadow-lg" />
    </div>
    
    {/* Text Content */}
    <div className="md:w-1/2 mt-8 md:mt-0">
      <h2 className="text-4xl font-bold text-blue-800">Financial Aid Support</h2>
      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        Secure the funding you need to achieve your dreams of studying abroad. Our team offers personalized financial aid guidance, from scholarships to student loans.
      </p>
      <div className="mt-6">
        <div className="text-lg text-blue-600 font-semibold">Our Process</div>
        <div className="space-y-4">
          <p>1. Fill out our financial assessment form.</p>
          <p>2. Get matched with potential scholarships and loans.</p>
          <p>3. Assistance with loan approval and disbursement.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default FinanceServices;
