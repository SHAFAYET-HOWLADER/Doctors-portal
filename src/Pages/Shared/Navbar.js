
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';

const Navbar = () => {
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const [user] = useAuthState(auth);
    const indexItems = <>
        <li className='text-2xl  font-medium'><CustomLink to='/'>Home</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/About'>About</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/Appointment'>Appointment</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/Reviews'>Reviews</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/ContactUs'>Contact Us</CustomLink></li>
        {
            user &&
            <li className='text-2xl  font-medium'><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        }
        {
            user ? <button onClick={logout} className="btn btn-sm">SignOut</button> :
                <li className='text-2xl  font-medium'><CustomLink to='/Login'>Login</CustomLink></li>
        }

    </>

    return (

        <section className='bg-primary'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 pr-2 shadow bg-base-100 rounded-box w-52">
                            {indexItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Doctors Portal</a>
                </div>
                <div className="navbar-center flex justify-end  className='bg-primary' hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {indexItems}
                    </ul>
                </div>
                <div className='navbar-end' >
                <label tabIndex="1" for="dashboard_sidebar"  className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                </div>
            </div>
        </section>

    );
};

export default Navbar;