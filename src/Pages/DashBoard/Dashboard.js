import React from 'react';
import { useQuery } from 'react-query';
import Billrow from './Billrow';

const Dashboard = () => {

    const { isLoading, error, data,refetch } = useQuery(['biils'], () =>
        fetch(`http://localhost:5000/billing-list`)
            .then(res =>res.json())          
    );
    const newData = data.slice(0,10)
    console.log(newData);
    return (
        <div className='bg-[#182B3C] shadow-xl rounded mx-20 '>
            

            <div className="overflow-x-auto text-black">
                <table className="table w-full">
                    <thead>
                        <tr className='mark table-head'>
                            <th>#</th>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone </th>
                            <th>Paid Amount </th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newData?.map((bill,index) => <Billrow
                            key={bill._id}
                            index={index}
                            bill={bill}
                            
                            refetch={refetch}
                            ></Billrow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;