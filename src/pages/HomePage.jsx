import '../App.css';
import { Helmet } from 'react-helmet'
import Hero from '../components/LandingPage/Hero';
import CountryCards from '../components/LandingPage/CountryStudyCard'
import LoanPg from '../components/LandingPage/StudyLoanCard'
import Carousel from '../components/LandingPage/TestimonialsCarousel';
import ContactForm from '../components/common/contactform'
import Serv from '../components/Admin/ServicesComponent'



function LandingPg() {
    return(
        
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Wow Global Studies</title>
                <meta name="keywords" content="study abroad, international education, global studies, overseas education"/>
            </Helmet>
        <Hero />
        <CountryCards />
        <LoanPg />
        {/* <Serv /> */}
        <Carousel />
        <ContactForm />
        </div>
    );
}

export default LandingPg;