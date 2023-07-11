import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import useSelectedClass from '../../../hooks/useSelectedClass';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    const [refetch, classes] = useSelectedClass();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = classItem => {
        axiosSecure.delete(`/selected-class/${classItem._id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success('successfully deleted');
                    refetch()
                }
            })
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
                            <th>Delete</th>
                            <th>Pay</th>
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
                                    <button
                                        onClick={() => handleDelete(classItem)}
                                        className='btn-sportsfitx'> Delete
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/make-payment/${classItem._id}`}
                                        className='btn-sportsfitx'>Pay
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;
