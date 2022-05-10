import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Navbar = () => {
    const indexItems = <>
        <li className='text-2xl  font-medium'><CustomLink to='/'>Home</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/About'>About</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/Appointment'>Appointment</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/Reviews'>Reviews</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/ContactUs'>Contact Us</CustomLink></li>
        <li className='text-2xl  font-medium'><CustomLink to='/Login'>Login</CustomLink></li>
    </>
    return (

        <section className='bg-primary' >
            <div class="navbar container mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 pr-2 shadow bg-base-100 rounded-box w-52">
                            {indexItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl">Doctors Portal</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal">
                        {indexItems}
                    </ul>
                </div>
            </div>
        </section>

    );
};

export default Navbar;