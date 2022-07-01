import React from 'react';
import Dashboard from './Dashboard';

const BillingPage = () => {
    return (
        <div className='bg-accent min-h-screen'>
           <h1 className='text-white font-bold text-4xl text-center py-5'>Billing Page</h1>

           <Dashboard></Dashboard>
        </div>
    );
};

export default BillingPage;