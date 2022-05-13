import React from 'react';
import { format } from 'date-fns';
const BookingModals = ({ treatment, selected,setTreatment }) => {
    const { slots, name } = treatment;
    const getInputValue = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={getInputValue} className='grid grid-cols-1 justify-items-center mt-2'>
                        <input type="text" disabled readOnly value={format(selected, 'PP')} className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <select name='slot' className="select select-success w-full max-w-xs mb-2">
                            {
                                slots.map(slot => <option slot={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your Name" className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="number" placeholder="Number" className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="email" placeholder="Email" className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="submit" value="Submit" className="text-white btn btn-primary input-success w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModals;