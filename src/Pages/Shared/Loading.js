import React from 'react';

const Loading = () => {
    return (

  
            <div class="bg-primary h-screen flex flex-column justify-center items-center">
                <progress class="progress w-56"></progress>
                &nbsp;
                <p className='text-white text-2xl font-medium'> Processing...</p>
            </div>
   

    );
};

export default Loading;