import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import DenyModal from '../../../components/Modal/DenyModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const ManageClasses = () => {
    const classes = useLoaderData();
    const modalRef = useRef({});
    const [axiosSecure] = useAxiosSecure();

    const handleApproved = classItem => {
        axiosSecure.put(`/classes/${classItem._id}`, { status: 'approved', feedback: null })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('successfully approved')
                }
            })
    };

    const handleDeny = classItem => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        axiosSecure.put(`/classes/${classItem._id}`,
            {
                status: 'deny',
                feedback
            })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('successfully deny')
                    form.reset();
                    closeModal(classItem);
                }
            })
    };

    const openModal = classItem => {
        if (modalRef.current[classItem._id]) {
            modalRef.current[classItem._id].showModal();
        }
    };

    const closeModal = classItem => {
        if (modalRef.current[classItem._id]) {
            modalRef.current[classItem._id].close();
        }
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Instructor Details</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>Deny</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem?.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">{classItem?.className}</div>
                                </td>
                                <td>
                                    <div className="text-xs font-semibold">{classItem?.instructor?.name}</div>
                                    <div className="text-xs opacity-80">{classItem?.instructor?.email}</div>
                                </td>
                                <td>{classItem.price}</td>
                                <td>{classItem.total_seats}</td>
                                <td>
                                    <p className="font-bold">{classItem.status}</p>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleApproved(classItem)}
                                        disabled={classItem.status === 'approved'}
                                        className={`btn-sportsfitx ${classItem.status === 'approved' && 'disabled'}`}
                                    >
                                        Approved
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => openModal(classItem)}
                                        disabled={classItem.status === 'deny'}
                                        className={`btn-sportsfitx ${classItem.status === 'deny' && 'disabled'}`}
                                    >
                                        Deny
                                    </button>
                                    <DenyModal
                                        modalRef={modalRef}
                                        classItem={classItem}
                                        handleDeny={handleDeny}
                                        closeModal={closeModal}
                                    ></DenyModal>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
