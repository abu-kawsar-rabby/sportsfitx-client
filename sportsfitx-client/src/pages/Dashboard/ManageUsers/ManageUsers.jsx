import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useManageUsers from "../../../hooks/useManageUsers"

const ManageUsers = () => {

    const [refetch, users] = useManageUsers();
    const [axiosSecure] = useAxiosSecure();


    const handleMakeInstructor = user => {
        axiosSecure.patch(`/users/${user._id}`, { role: 'instructor' })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success(`${user.name} now is Instructor`)
                    refetch();
                }
            })
    }
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/${user._id}`, { role: 'admin' })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success(`${user.name} now is Admin`)
                    refetch();
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>User Picture</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt={user?.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{user?.name}</div>
                                    </td>
                                    <td>
                                        {user?.email}
                                    </td>
                                    <td>{user?.role}</td>
                                    <th>
                                        <button onClick={() => handleMakeInstructor(user)} disabled={user.role === 'instructor' || user.role === 'admin'} className={`btn-sportsfitx ${user.role === 'instructor' || user.role === 'admin' && 'disabled'}`}>Make Instructor</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleMakeAdmin(user)}
                                            disabled={user.role === 'admin'} className={`btn-sportsfitx ${user.role === 'admin' && 'disabled'}`}>Make Admin</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;