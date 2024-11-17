import logo from './logo.svg';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import './index.css';

// Common Components Imports-----------------------------------------------------------

import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer'
import Chatbot from './components/common/Chatbot'
import Calc from './components/common/LoanCalculator.jsx'
import Contact from './components/common/contactform.jsx'
import Foot from './components/common/Footer01';
import BtmNavbar from './components/common/BtmNavbar.jsx';


//Servies Pages Imports---------------------------------------------------------------

import Scholarship from './components/ServicesPage/Scholarship.jsx'
import TravelInsurance from './components/ServicesPage/TravelInsurance'
import FinancePg from './components/ServicesPage/FinancePg.jsx'
import AirTicketPg from './components/ServicesPage/AirTicketPg.jsx'
import InternationalDrivingLicense from './components/ServicesPage/internationalLicense.jsx';
import FreeCounseling from './components/ServicesPage/FreeCounselling.jsx';
import ApplicationProcess from './components/ServicesPage/ApplicationProcess.jsx';
import InterviewPreparation from './components/ServicesPage/InterviewPreparation.jsx';
import VisaAssessment from './components/ServicesPage/VisaAss.jsx';


//Countries Pages Imports -------------------------------------------------------------

import USA from './components/Countries/USA'
import Canada from './components/Countries/Canada'
import UK from './components/Countries/Uk'
import Germany from './components/Countries/Germany'
import NewZealand from './components/Countries/NewZealand'
import Australia from './components/Countries/Australia'


//Landing Page import -----------------------------------------------------------------

import Landing from './pages/HomePage.jsx';


//Other Imports -----------------------------------------------------------------------
import Admin from './components/Admin/Admin.jsx';
import ComingSoon from './pages/ComimgSoonPage.jsx'
import Serv from './components/ServicesPage/Servicepage.jsx'





function App() {
  
  return (
    <Router>
      <Navbar />
      {/* <BtmNavbar /> */}
      {/* --------------------------------------- Routes Of pages ------------------------------ */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/PTE" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />

        {/* --------------------------------------- Servies pages ------------------------------ */}

        <Route path="/scholarship" element={<Scholarship />} />
        <Route path='/counseling' element={<FreeCounseling/>} />
        <Route path="/TravelInsurance" element={<TravelInsurance />} />
        <Route path="/FinancePg" element={<FinancePg />} />
        <Route path="/AirTicketPg" element={<AirTicketPg />} />
        <Route path="/InternationalDrivingLicense" element={<InternationalDrivingLicense />} />
        <Route path="/Application" element={<ApplicationProcess />} />
        <Route path="/InterviewPreparation" element={<InterviewPreparation />} />
        <Route path="/VisaAssessment" element={<VisaAssessment />} />

        {/* --------------------------------------- Countries pages ------------------------------ */}

        <Route path="/USA" element={<USA />} />
        <Route path="/Canada" element={<Canada />} />
        <Route path="/UK" element={<UK />} />
        <Route path="/Germany" element={<Germany />} />
        <Route path="/New-Zealand" element={<NewZealand />} />
        <Route path="/Australia" element={<Australia />} />



        <Route path="/serv" element={<Serv />} />

      </Routes>
      < Chatbot />
      < Foot />
    </Router>  

  );
}

export default App;
