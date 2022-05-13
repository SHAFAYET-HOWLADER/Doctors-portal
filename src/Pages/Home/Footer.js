import React from 'react';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section id='footer' className='py-16' style={{
            background: `url(${footer})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <footer>
                <div className='footer p-10 mx-auto container'>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Our Address</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>

                <div className="bg-primary py-3">
                    <p className='text-center font-medium'>Copyright © {year} - All right reserved</p>
                </div>

            </footer>
        </section>
    );
};

export default Footer;