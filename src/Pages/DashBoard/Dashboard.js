import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Billrow from './Billrow';
import { ReactComponent as Plus } from '../../assets/Plus_icon.svg';
import BillModal from './BillModal';
import ReactPaginate from 'react-paginate';

const Dashboard = () => {
    const [pageCount, setPageCount] = useState(0)
    const [billModal, setBillModal] = useState(false);

    const { isLoading, error, data, refetch } = useQuery(['biils'], () =>
        fetch(`https://flannel-beaver-14431.herokuapp.com/billing-list`)
            .then(res => res.json())
    );
    console.log(data);

    let viewData;
    if (data) {
        const newData = [...data]
        const currentData = newData?.reverse().slice(0, 10)
        viewData = currentData
    }

    const handlePageClick = (data) => {
        console.log(data.selected);
    }
    return (
        <div className=' mx-20 '>

            <div className='flex flex-row my-5 justify-between'>
                <form className='flex justify-center'>
                    <div class="form-control ">
                        <div class="input-group ">
                            <input type="text" placeholder="Search…" class="input input-bordered w-96 bg-[#1E384E]" />
                            <button class="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </form>

                <label onClick={() => setBillModal(true)} className='btn font-bold modal-button' htmlFor="add-bill-modal">
                    <Plus className='icon' /> Add New Bill
                </label>

            </div>

            <div className="overflow-x-auto shadow-xl ">
                <table className="table w-full ">
                    <thead>
                        <tr className='mark table-head '>
                            <th>#</th>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone </th>
                            <th>Amount </th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewData?.map((bill, index) => <Billrow
                                key={bill._id}
                                index={index}
                                bill={bill}

                                refetch={refetch}
                            ></Billrow>)
                        }


                    </tbody>
                </table>
            </div>

            {/* pagination */}
            <div className='py-5'>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={10}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"btn-group flex justify-center"}
                    pageClassName={"btn"}
                    previousClassName={"btn btn-outline btn-info"}
                    nextClassName={"btn btn-outline btn-info"}
                    breakClassName={"btn"}
                    activeClassName={"btn btn-active"}
                />
            </div>

            {/* modal  */}
            {
                billModal && <BillModal
                    setBillModal={setBillModal}
                ></BillModal>

            }





        </div>
    );
};

export default Dashboard;