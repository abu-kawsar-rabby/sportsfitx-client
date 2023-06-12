import usePayments from "../../../hooks/usePayments";
import EnrolledTableRow from "./EnrolledTableRow";

const EnrolledClass = () => {
    const [, payments] = usePayments();

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
                        {payments?.map((payment, index) => (
                            <EnrolledTableRow
                                key={payment._id}
                                index={index}
                                classId={payment.classId}
                                date={payment.date}
                            ></EnrolledTableRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;
