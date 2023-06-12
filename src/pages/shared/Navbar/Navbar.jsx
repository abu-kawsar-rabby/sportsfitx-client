import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import Container from "../Container/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { BsMoon } from "react-icons/bs";
import { CgSun } from "react-icons/cg";

const Navbar = () => {
    // use theme from local storage if available or set light theme
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow flex justify-center items-center rounded-box bg-black z-10 w-52">
                                {navItems}
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case md:text-4xl text-xl text-white">SportsFitX</Link>
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
                                            <img referrerPolicy='no-referrer' src={user?.photoURL} />
                                        </div>
                                    </Link>
                                    <button
                                        onClick={handleLogOut}
                                        className="btn-sportsfitx md:!px-7 md:!py-3 md:font-bold md:text-lg md:hover:-mt-1">Logout
                                    </button>
                                </div>
                                : <Link to={'/login'}>
                                    <button className="btn-sportsfitx md:!px-7 md:!py-3 md:font-bold md:text-lg md:hover:-mt-1">Login</button>
                                </Link>
                        }
                        <button className="btn btn-square btn-ghost">
                            <label className="swap swap-rotate w-12 h-12">
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    // show toggle image based on localstorage theme
                                    checked={theme === "light" ? false : true}
                                />
                                <CgSun className="w-8 h-8 text-white swap-on" ></CgSun>

                                <BsMoon className="w-8 h-8 text-white swap-off"></BsMoon>
                            </label>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;