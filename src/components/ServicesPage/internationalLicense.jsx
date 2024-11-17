import React from 'react';
import Helmet from 'react-helmet';

const InternationalDrivingLicense = () => {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>License | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-purple-900">Welcome to WOW GLOBAL STUDIES</h1>
        <p className="text-gray-700 mb-8 text-center text-lg">
          Welcome to WOW GLOBAL STUDIES, where we facilitate the process of obtaining an international driving license hassle-free. Whether you're planning to study abroad or travel internationally, having an international driving license can be immensely beneficial. Our comprehensive service ensures you're equipped with the necessary documentation to drive legally in foreign countries.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-purple-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              title: "Expert Guidance",
              description: "Our team of experienced consultants provides expert guidance throughout the application process, ensuring all requirements are met accurately and efficiently.",
              imgSrc: "https://media.istockphoto.com/id/1231898401/vector/%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C2%B5-rgb.jpg?s=612x612&w=0&k=20&c=OpAH1-b7qULawK00Kia-uB9Y8IjBdQ9SuZ_hMph4VS4="
            },
            {
              title: "Streamlined Process",
              description: "We understand the importance of time and convenience. Our streamlined process minimizes paperwork and ensures a quick turnaround time for your international driving license.",
              imgSrc: "https://media.istockphoto.com/id/1033799364/vector/workflow-process-icon-in-flat-style-gear-cog-wheel-with-arrows-vector-illustration-on-white.jpg?s=612x612&w=0&k=20&c=w0GBtP-wdqzKXr-H2tEpXZleFuCVhNIeg-d4sypTTZ0="
            },
            {
              title: "Reliable Service",
              description: "With years of experience in the industry, we have built a reputation for reliability and professionalism. Rest assured, your international driving license application is in safe hands with us.",
              imgSrc: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148897471.jpg"
            },
            {
              title: "Personalized Assistance",
              description: "Every client is unique, and we tailor our services to meet your specific needs. From document preparation to submission, we provide personalized assistance at every step of the process.",
              imgSrc: "https://t3.ftcdn.net/jpg/05/41/83/86/360_F_541838668_i4HZrr0sOgHFcumc5YrF1WpEK8kAsSBl.jpg"
            },
            {
              title: "Customer Satisfaction",
              description: "Your satisfaction is our priority. We strive to exceed your expectations by delivering exceptional service and ensuring a smooth experience from start to finish.",
              imgSrc: "https://t4.ftcdn.net/jpg/04/03/58/65/360_F_403586528_oyELlTJDLt6N1Gx9stbQCLUUXfeOvSrZ.jpg"
            }
          ].map((service, index) => (
            <div key={index} className="bg-purple-100 p-6 rounded-lg shadow-lg">
              <img src={service.imgSrc} alt={service.title} className="w-full h-40 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">What is an International Driving License?</h2>
        <p className="text-gray-700 mb-8 text-center text-lg">
          An international driving license is a document that allows individuals to drive legally in foreign countries. It serves as a translation of your domestic driver's license into multiple languages, making it easier for authorities to understand your driving credentials abroad.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-purple-800">Requirements</h2>
        <p className="text-gray-700 mb-4 text-lg">To obtain an international driving license, you typically need:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-8 text-lg">
          <li className="mb-2">A valid domestic driver's license</li>
          <li className="mb-2">Passport-sized photographs</li>
          <li className="mb-2">Completed application form</li>
          <li className="mb-2">Application fee</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {[
            {
              title: "Document Verification",
              description: "We ensure all your documents meet the requirements for an international driving license application.",
              imgSrc: "https://www.cflowapps.com/wp-content/uploads/2023/06/dcumnt_routing-andApproval.jpg"
            },
            {
              title: "Application Assistance",
              description: "Our consultants guide you through the application process, helping you fill out forms accurately and efficiently.",
              imgSrc: "https://t3.ftcdn.net/jpg/06/64/05/62/360_F_664056292_ihH0vqgI6FtN5N9xVYN3qvNeiBmriHag.jpg"
            },
            {
              title: "Expedited Processing",
              description: "We prioritize your application to ensure a swift processing time, allowing you to obtain your international driving license promptly.",
              imgSrc: "https://t4.ftcdn.net/jpg/02/30/29/99/360_F_230299937_FO8ymaPzSirVtTvYPlrfJ0t4RLQDBLQG.jpg"
            },
            {
              title: "Ongoing Support",
              description: "Even after obtaining your international driving license, we remain available to address any queries or concerns you may have.",
              imgSrc: "https://www.shutterstock.com/image-vector/happy-businessman-give-thumb-call-600nw-591771458.jpg"
            }
          ].map((service, index) => (
            <div key={index} className="bg-purple-100 p-6 rounded-lg shadow-lg">
              <img src={service.imgSrc} alt={service.title} className="w-full h-32 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-purple-800">Get Started</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Ready to embark on your international journey? Contact us today to learn more about our international driving license services and get started on your application. Drive with confidence wherever your travels take you with WOW GLOBAL STUDIES.
        </p>
        <div className="text-center">
          <a href="contact.html" className="bg-purple-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-700 transition duration-300">Contact Us</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default InternationalDrivingLicense;
