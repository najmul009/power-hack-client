import React from 'react';
import { useQuery } from 'react-query';
import Billrow from './Billrow';
import { ReactComponent as Plus } from '../../assets/Plus_icon.svg';

const Dashboard = () => {

    const { isLoading, error, data, refetch } = useQuery(['biils'], () =>
        fetch(`http://localhost:5000/billing-list`)
            .then(res => res.json())
    );
    const newData = data?.slice(0, 10)
    console.log(newData);

    
    return (
        <div className=' mx-20 '>

            <div className='flex flex-row my-5 justify-between'>
                <form>
                    <div class="form-control ">
                        <div class="input-group ">
                            <input type="text" placeholder="Search…" class="input input-bordered w-96" />
                            <button class="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </form>

                <button className='btn '>
                   <Plus className='icon'/> Add New Bill
                </button>

            </div>

            <div className="overflow-x-auto shadow-xl">
                <table className="table w-full ">
                    <thead>
                        <tr className='mark table-head '>
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
                            newData?.map((bill, index) => <Billrow
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