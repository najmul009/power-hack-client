import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Billrow = ({ bill, index, refetch }) => {
    const { name, email, phone, amount, _id } = bill;
    const shipping = () => {
    
    }
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{amount}</td>


            <td>
                <button onClick={shipping} className='btn btn-sm btn-naturel'>Edit</button>
            </td>

            <td>
                <label for="delete-confirm-modal" className="btn btn-sm modal-button btn-warning ">Delete</label >

            </td>
        </tr>
    );
};

export default Billrow;