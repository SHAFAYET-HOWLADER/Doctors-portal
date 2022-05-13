import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <section id='service'>
            <div className='container'>
                <div className="card w-96 bg-base-100 shadow-xl mb-10 text-center">
                    <div className="card-body">
                        <h4 className="font-bold text-secondary text-2xl">{name}</h4>
                        <p>
                            {
                                slots.length > 0 ? <span className=' text-bold' > {slots[0]} </span>
                                    : <span className=' text-bold' >No Space Available</span>
                            }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                        <div className="card-actions justify-center">

                            <label
                                onClick={() => setTreatment(service)}
                                disabled={slots.length === 0}
                                for="bookingModal"
                                className="btn btn-sm modal-button btn-primary text-white bg-gradient-to-r from-secondary to-primary">
                                BOOK APPOINTMENT
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;