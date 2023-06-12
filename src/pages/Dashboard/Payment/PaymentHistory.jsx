import moment from "moment/moment";
import usePayments from "../../../hooks/usePayments";


const PaymentHistory = () => {
    const [, payments] = usePayments();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TransectionId</th>
                            <th>Class Name</th>
                            <th>Amount</th>
                            <th>Service</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.transectionId}</td>
                                <td>
                                    <div className="font-bold">{payment?.className}</div>
                                </td>
                                <td>${payment.price}</td>
                                <td>{payment.service}</td>
                                <td>
                                    <p className="font-bold">{moment(payment.date).format('MMMM Do YYYY')}</p>
                                    <p className="font-bold">{moment(payment.date).format('h:mm:ss a')}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;