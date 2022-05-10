import React from 'react';
import Banner from '../banner/Banner';
import LocationInfo from '../LocationInfo/LocationInfo';
import Services from '../Services/Services';
import Appointment from './Appointment';
import Contact from './Contact';
import Footer from './Footer';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <LocationInfo/>
            <Services/>
            <Appointment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;