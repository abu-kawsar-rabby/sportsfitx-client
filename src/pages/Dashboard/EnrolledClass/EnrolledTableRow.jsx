import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment/moment";
import { BeatLoader } from "react-spinners";

const EnrolledTableRow = ({ date, classId, index }) => {
    const [axiosSecure] = useAxiosSecure();

    const { data: classItem, isLoading } = useQuery({
        queryKey: ['classes', classId],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${classId}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <tr><BeatLoader></BeatLoader></tr>;
    }

    return (
        <tr>
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
            <td>{classItem?.price}</td>
            <td>
                <p className="font-bold">{moment(date).format('MMMM Do YYYY')}</p>
            </td>
        </tr>
    );
};

export default EnrolledTableRow;
