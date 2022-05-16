import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const BookingModals = ({ treatment, selected, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, slots, name } = treatment;
    const getInputValue = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: format(selected, 'PP'),
            slot,
            UserName: user.displayName,
            email: user.email,
            number: event.target.number.value,
        }
        // post booking data
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`successfully added an appointment on ${format(selected, 'PP')} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on ${format(selected, 'PP')} at ${slot}`)
                }
                refetch()
                setTreatment(null);
            })
    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={getInputValue} className='grid grid-cols-1 justify-items-center mt-2'>
                        <input type="text" disabled readOnly value={format(selected, 'PP')} className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <select name='slot' className="select select-success w-full max-w-xs mb-2">
                            {
                                slots.map((slot, index) =>
                                    <option
                                        slot={slot}
                                        key={index}
                                    >{slot}
                                    </option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="email" value={user?.email} className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="number" name='number' placeholder="Number" className="mb-2 input input-bordered input-success w-full max-w-xs" />
                        <input type="submit" value="Submit" className="text-white btn btn-primary input-success w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModals;