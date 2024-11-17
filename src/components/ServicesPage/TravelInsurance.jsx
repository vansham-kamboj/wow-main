import React from 'react';
import Helmet from 'react-helmet';

function TravelInsurance() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Travel Insurance | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
            <header className="bg-purple-700  text-white p-4 text-center">
                <h1 className="text-3xl font-bold max-sm:mt-20">Travel Insurance</h1>
                <p className="text-xl">Secure your journey with our comprehensive travel insurance plans.</p>
            </header>

            <main className="p-8">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Why Choose Our Travel Insurance?</h2>
                    <p>Our travel insurance plans provide you with coverage for unexpected events, so you can enjoy your trip with peace of mind.</p>
                </section>

                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                </button>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-purple-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Medical Expenses</h3>
                            <p>We can assist you during the purchase of your ticket, whether you prefer to buy one or more tickets for yourself and/or your companions.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-purple-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Emergency Evacuation Service</h3>
                            <p>We will ensure that you are well prepared for your journey, especially if there are any travel restrictions or concerns.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-purple-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Evacuation & Repatriation</h3>
                            <p>Should you encounter a medical emergency during your travel, Kanan will provide the necessary assistance to ensure your safety and security.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-purple-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Airport Transfers</h3>
                            <p>Kanan will ensure that you have a smooth journey from the airport to your destination campus.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default TravelInsurance;
