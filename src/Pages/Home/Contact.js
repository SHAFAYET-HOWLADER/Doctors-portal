import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import contact_img from '../../assets/images/appointment.png';
const Contact = () => {
    return (
        <section id='contact' className='py-16' style={{
            background: `url(${contact_img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h3 className='text-secondary text-2xl font-medium'>Contact Us</h3>
                    <h2 className='text-white text-4xl font-normal pb-10'>Stay connected with us</h2>
                </div>
                <form className='flex flex-col justify-center items-center' >
                    <input type="email" placeholder="Email Address" className="mb-2 w-[450px] h-[48px] input input-bordered input-success  max-w-xs" required />
                    <input type="text" placeholder="Subjects" className="mb-2 w-[450px] h-[48px] input input-bordered input-success  max-w-xs" />
                    <textarea type="text" placeholder="Your message" className="w-[450px] mb-9 h-[48px] input input-bordered input-success  max-w-xs" />
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default Contact;