import React from 'react';
import quotes from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const review = [
        {
            _id: 1,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]
    return (
        <section id='testimonials'>
            <div className='container mx-auto'>
               <div className='flex justify-between pt-24'>
                   <div>
                       <h4 className='text-primary font-bold text-2xl'>Testimonial</h4>
                       <h2 className='font-normal text-3xl'>What Our Patients Says</h2>
                   </div>
                   <div>
                       <img className='lg:w-[192px] lg:h-[156px] w-[100px] lg:h-[80px]' src={quotes} alt='icons' />
                   </div>
               </div>
               <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                   {
                       review.map(review=> <Review 
                        key={review._id}
                        review={review}
                       ></Review>)
                   }
               </div>
            </div>
        </section>
    );
};

export default Testimonials;