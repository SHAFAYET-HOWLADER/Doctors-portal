import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const AppointmentNav = () => {
  const [selected, setSelected] = useState(new Date());

    return (
        <section id="appoint">
          <AppointmentBanner selected={selected} setSelected={setSelected}/>
          <AvailableAppointment selected={selected}/>
          <Footer/>
        </section>
    );
};

export default AppointmentNav;