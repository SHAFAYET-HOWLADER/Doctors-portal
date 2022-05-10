import React from 'react';

const Review = (props) => {
    const { review, img } = props.review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl my-10">
            <div class="card-body">
                {review}
                <div class="flex items-center justify-evenly pt-12">
                    <div className=''>
                        <img src={img} alt='img' />
                    </div>
                    <div>
                         <h5 className='text-1xl font-bold'>Winson Herry</h5>
                         <p>California</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;