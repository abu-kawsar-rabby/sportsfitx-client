import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <>
            <div className="flex justify-between gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered rounded border-rose-500 focus:outline-none w-24 md:w-auto text-black font-bold" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-black text-white z-10 py-2 rounded space-y-3 font-bold w-52">
                        <li>
                            <Link to={'/dashboard/profile'}>
                                Profile
                            </Link>
                        </li>
                        <li><button onClick={logOut}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardNavbar;