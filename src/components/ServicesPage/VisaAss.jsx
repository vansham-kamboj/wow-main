import React from 'react';

const VisaAssessment = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-8 text-purple-500">Visa Assessment</h1>
        <p className="text-lg mb-8">
          Take the first step toward your study abroad journey by assessing your visa eligibility with our team of experts. Our visa assessment tool
          will help you understand the requirements, documents needed, and next steps for obtaining a student visa.
        </p>

        {/* Visa Eligibility Form */}
        <div className="bg-gray-800 p-8 rounded-lg mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Check Your Eligibility</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Country of Interest"
              className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 rounded-md hover:bg-purple-500 transition"
            >
              Submit for Assessment
            </button>
          </form>
        </div>

        {/* FAQs Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-purple-500 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">What documents do I need for a student visa?</h3>
              <p className="text-lg text-gray-400">
                You will need proof of acceptance, financial documentation, passport, and visa application forms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How long does the visa process take?</h3>
              <p className="text-lg text-gray-400">
                The process can take anywhere from a few weeks to a few months, depending on the country and embassy.
              </p>
            </div>
          </div>
        </div>

        {/* Visa Process Timeline */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-purple-500 mb-6">Visa Process Timeline</h2>
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div className="p-4 bg-gray-800 rounded-lg">Application</div>
            <div className="p-4 bg-gray-800 rounded-lg">Processing</div>
            <div className="p-4 bg-gray-800 rounded-lg">Approval</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaAssessment;
