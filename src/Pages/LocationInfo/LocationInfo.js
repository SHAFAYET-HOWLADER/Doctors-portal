import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
const LocationInfo = () => {
    return (
        <section id='locationInfo' className='pb-12'>
            <div className='time container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='time_icon flex items-center bg-gradient-to-r from-secondary to-primary w-96 h-44 px-3  rounded-xl'>
                    <div className='text-7xl text-white pr-3'>
                        <FaClock />
                    </div>
                    <div>
                        <h3 className='pb-2 font-bold text-white'>Opening Hours</h3>
                        <p className='text-white font-normal'>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                <div className='time_icon flex items-center bg-accent w-96 h-44 px-3  rounded-xl'>
                    <div className='text-7xl text-white pr-3'>
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        <h3 className='pb-2 font-bold text-white'>Visit our location</h3>
                        <p className='text-white font-normal'>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className='time_icon flex items-center bg-gradient-to-r from-secondary to-primary w-96 h-44 px-3  rounded-xl'>
                    <div className='text-7xl text-white pr-3'>
                        <FaPhoneAlt />
                    </div>
                    <div>
                        <h3 className='pb-2 font-bold text-white'>Contact us nows</h3>
                        <p className='text-white font-normal'>+000 123 456789</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LocationInfo;
