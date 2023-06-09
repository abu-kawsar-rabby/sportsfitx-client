import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const DashboardNavbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="">
                <div className="flex justify-between gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered rounded-none w-24 md:w-auto text-black font-bold" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-2 border-white">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;