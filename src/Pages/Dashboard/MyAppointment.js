import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


const MyAppointment = () => {
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/home');
                }
                return res.json()
            })
            .then(data => {
                return setAppointment(data)
            })
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
                            appointment.map((appoint, index) => <tr>
                                <th>{index + 1}</th>
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