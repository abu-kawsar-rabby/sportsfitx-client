import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import Container from "../Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
        <li><ActiveLink to='/classes'>Classes</ActiveLink></li>
        <li><ActiveLink to='/dashboard '>Dashboard </ActiveLink></li>
    </>
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className="bg-black sticky top-0 z-10">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow flex justify-center items-center rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-5xl text-white">SportsFitX</Link>
                    </div>
                    <div className="navbar-end">
                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                                {navItems}
                            </ul>
                        </div>
                        {
                            user
                                ? <div className="flex justify-center items-center gap-3">
                                    <Link to={'/dashboard/profile'} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 border-2 border-white rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </Link>
                                    <button
                                        onClick={handleLogOut}
                                        className="btn-sportsfitx !px-7 !py-3 font-bold text-lg hover:-mt-1">Logout
                                    </button>
                                </div>
                                : <Link to={'/login'}>
                                    <button className="btn-sportsfitx !px-7 !py-3 font-bold text-lg hover:-mt-1">Login</button>
                                </Link>
                        }

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;