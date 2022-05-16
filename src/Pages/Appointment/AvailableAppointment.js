import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import BookingModals from './BookingModals';
import Service from './Service';

const AvailableAppointment = ({ selected }) => {
    const [treatment, setTreatment] = useState(null);
    const formatted = format(selected, 'PP');
    const { data: services, error, isLoading, refetch } = useQuery(['available', formatted], () =>
        fetch(`http://localhost:5000/available?selected=${formatted}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    if (error) return 'An error has occurred: ' + error.message
    return (
        <section id='availableAppointment' className='pt-16' >
            <h4 className='text-xl text-secondary text-center'>Available appointment {format(selected, 'PP')}</h4>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service => <Service
                        key={service._id}
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
                    refetch={refetch}
                ></BookingModals>
            }
        </section>
    );
};

export default AvailableAppointment;