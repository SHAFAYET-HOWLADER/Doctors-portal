import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModals from './BookingModals';
import Service from './Service';

const AvailableAppointment = ({ selected }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section id='availableAppointment' className='pt-16' >
            <h4 className='text-xl text-secondary text-center'>Available appointment {format(selected, 'PP')}</h4>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        ket={Service._id}
                        service={service}
                        setTreatment={setTreatment}
                    > </Service>)
                }
            </div>
            {
                treatment && <BookingModals
                    treatment={treatment}
                    selected={selected}
                    setTreatment={setTreatment}
                ></BookingModals>
            }
        </section>
    );
};

export default AvailableAppointment;