import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({ selected }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section id='availableAppointment' className='pt-16' >
            <h4 className='text-xl text-secondary text-center'>Available appointment {format(selected, 'PP')}</h4>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        ket={Service._id}
                        service={service}
                    > </Service>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;