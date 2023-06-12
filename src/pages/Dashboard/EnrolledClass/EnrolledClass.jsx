import useClasses from '../../../hooks/useClasses';

const EnrolledClass = () => {
    const [, classes] = useClasses();
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
                            <th>Enrolled Date</th>
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
                                <td>
                                    <p className="font-bold">{classItem.date}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;
