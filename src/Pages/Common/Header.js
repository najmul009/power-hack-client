import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.JPG'
const Header = () => {
    
    return (
        <div className="navbar  lg:px-20 pt-5 bg-primary text-white h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 fnt-os font-bold">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/billing'>Add Bill</Link></li>


                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">
                    <img width={200}  src={logo} alt="" />
                </Link>
            </div>
            <div className=" navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal p-0 fnt-os font-bold">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/billing'>Add Bill</Link></li>

                </ul>
            </div>
            

        </div>
    );
};

export default Header;