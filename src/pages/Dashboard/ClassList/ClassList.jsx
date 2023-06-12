import { Link } from "react-router-dom";
import useClass from "../../../hooks/useClass";

const ClassList = () => {
    const [, classes] = useClass([]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Total Enrolled Students</th>
                            <th>Update</th>
                            <th>Feedback (if Any)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes?.map((classItem, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{classItem.className}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem.total_seats}</td>
                                <td>{classItem.status}</td>
                                <td className="text-center">{classItem?.enrollment
                                    ? classItem?.enrollment
                                    : 0}
                                </td>
                                <td> <Link
                                    to={`/dashboard/update-class/${classItem._id}`}
                                    className="btn-sportsfitx !p-3"
                                >Update</Link>
                                </td>
                                <td>{classItem.feedback === ''
                                    ? 'No Feedback'
                                    : classItem.feedback}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClassList;