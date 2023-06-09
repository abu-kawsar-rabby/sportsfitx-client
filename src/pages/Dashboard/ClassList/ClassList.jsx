import { useLoaderData } from "react-router-dom";

const ClassList = () => {
    const classes = useLoaderData();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>price</th>
                            <th>Available Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{classItem.className}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem.total_seats}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClassList;