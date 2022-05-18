import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard_sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex justify-center">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard_sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-primary text-base-content">
                    <li className='text-white font-bold text-1xl' ><Link to='/dashboard'>Appointment</Link></li>
                    <li className='text-white font-bold text-1xl' ><Link to='/dashboard/review'>Review</Link></li>
                    <li className='text-white font-bold text-1xl' ><Link to='/dashboard/history'>History</Link></li>
                    {admin && <li className='text-white font-bold text-1xl' ><Link to='/dashboard/allUser'>All User</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;