import React from 'react';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section id='footer' style={{
            background: `url(${footer})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <footer>
                <div className='footer p-10 mx-auto container'>
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">Our Address</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                </div>

                <div class="bg-primary py-3">
                    <p className='text-center font-medium'>Copyright © {year} - All right reserved</p>
                </div>

            </footer>
        </section>
    );
};

export default Footer;