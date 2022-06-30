import React from 'react';
import bg from '../../assets/power-banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{ background: `url(${bg})`, backgroundSize: "cover" }} className="hero min-h-screen flex justify-center items-center flex-col gap-10">
            <h1 className='text-7xl font-bold'>Welcome to Power Hack</h1>
            <h2 className='text-3xl'>Let's Add your Power Bill.</h2>
            <Link to='/billing' className='btn btn-md btn-secondary rounded-none text-xl font-bold '>ADD BILL</Link>
        </div>
    );
};

export default Banner;