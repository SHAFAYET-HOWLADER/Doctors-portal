import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [user])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           appointment.map((appoint, index) =>  <tr>
                            <th>{index+1}</th>
                            <td>{appoint.treatmentName}</td>
                            <td>{user.email}</td>
                            <td>{appoint.slot}</td>
                            <td>{appoint.date}</td>
                        </tr>)
                       }
                    </tbody>                   
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;