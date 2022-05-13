import React from 'react';
import { FaTooth } from 'react-icons/fa';
import treatment from '../../assets/images/treatment.png'
const Services = () => {
    return (
        <section id='services' className='pb-32'>
            <div className='container mx-auto'>
                <div className='services_title text-center pb-16'>
                    <h4 className='text-primary font-bold'>OUR SERVICES</h4>
                    <h2 className='text-4xl pt-1'>Services We Provide</h2>
                </div>

                <div className='service_items grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='w-96 h-72 py-9 px-10 shadow-lg shadow-indigo-500/40 rounded-xl'>
                        <div className='text-primary text-8xl ml-24'>
                            <FaTooth />
                        </div>
                        <div className='text-center pt-4'>
                            <h5 className='font-medium pb-3'>Fluoride Treatment</h5>
                            <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                        </div>
                    </div>
                    <div className='w-96 h-72 py-9 px-10 shadow-lg shadow-indigo-500/40 rounded-xl'>
                        <div className='text-primary text-8xl ml-24'>
                            <FaTooth />
                        </div>
                        <div className='text-center pt-4'>
                            <h5 className='font-medium pb-3'>Fluoride Treatment</h5>
                            <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                        </div>
                    </div>
                    <div className='w-96 h-72 py-9 px-10 shadow-lg shadow-indigo-500/40 rounded-xl'>
                        <div className='text-primary text-8xl ml-24'>
                            <FaTooth />
                        </div>
                        <div className='text-center pt-4'>
                            <h5 className='font-medium pb-3'>Fluoride Treatment</h5>
                            <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                       <div className='flex flex-1'>
                       <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='img'/>
                       </div>
                        <div className='  flex-1'>
                            <h2 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                            <p className="py-6 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;