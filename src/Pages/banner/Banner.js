import React from 'react';
import chair_bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${chair_bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='chair_img' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts <br />Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;