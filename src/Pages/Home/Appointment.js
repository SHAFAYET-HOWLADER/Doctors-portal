import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Appointment = () => {
    return (
        <section id='appointment' className=' p-12  md:p-0  lg:p-0'  style={{
            background: `url(${appointment})`,
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className='container flex justify-center items-center'>
                <div className='flex-1  mt-[-200px] hidden lg:block'>
                    <img src={doctor} alt='' />
                </div>
                <div className='flex-1'>
                    <h3 className='text-primary text-3xl font-bold'>Appointment</h3>
                    <h3 className='text-white text-4xl font-medium py-5'>Make an appointment Today</h3>
                    <p className='text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Appointment;