import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const BillModal = ({ setBillModal, date, refetch }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        data.amount = "$" + data.amount
        console.log(data);

        fetch('http://localhost:5000/add-billing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('Appionment Booked')
                    refetch()
                    setBillModal(false);
                }
                else {
                    toast.error('Alrady have an appionment ' + data.exists?.date + "  " + data.exists?.slot)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="add-bill-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center ">
                <form onSubmit={handleSubmit(onSubmit)} className="modal-box grid grid-cols-1 gap-4 justify-items-center bg-accent">
                    <label htmlFor="add-bill-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-secondary font-bold text-xl">Add New Bill</h3>

                    <div className="form-control w-full max-w-xs modal-from">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                                minLength: {
                                    value: 4,
                                    message: 'Provied a valid Name'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs modal-from">

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provied a valid email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs modal-from">

                        <input
                            type="number"
                            placeholder="phone"
                            className="input input-bordered"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Provied Your phone number'
                                },
                                minLength: {
                                    value: 11,
                                    message: 'Phone number Must be 11 characters'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs modal-from">

                        <input
                            type="number"
                            placeholder="$ Amount "
                            className="input input-bordered"
                            {...register("amount", {
                                required: {
                                    value: true,
                                    message: 'Amount is Required'
                                }
                                
                            })}
                        />
                        <label className="label">
                            {errors.amount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.amount.message}</span>}
                            

                        </label>
                    </div>

                    <button type="submit" className="btn  w-full max-w-xs"> Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BillModal;