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
            <input type="checkbox" id="bookingModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="bookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={getInputValue} className='grid grid-cols-1 justify-items-center mt-2'>
                        <input type="text" disabled readOnly value={format(selected, 'PP')} class="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <select name='slot' class="select select-success w-full max-w-xs">
                            {
                                slots.map(slot => <option slot={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your Name" class="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="number" placeholder="Number" class="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="email" placeholder="Email" class="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="submit" value="Submit" class="text-white btn btn-primary input-success w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModals;