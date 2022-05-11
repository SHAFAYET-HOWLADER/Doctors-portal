import React from 'react';

const Service = ({ service }) => {
    const {name, slots } = service;
    return (
        <section id='service'>
            <div className='container'>
                <div class="card w-96 bg-base-100 shadow-xl mb-10 text-center">
                    <div class="card-body">
                        <h4 class="font-bold text-secondary text-2xl">{name}</h4>
                        <p>
                            {
                                slots.length > 0 ? <span className=' text-bold' > {slots[0]} </span>
                                    : <span className=' text-bold' >No Space Available</span>
                            }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                        <div class="card-actions justify-center">
                            <button disabled={slots.length === 0} class="btn btn-primary text-white">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;