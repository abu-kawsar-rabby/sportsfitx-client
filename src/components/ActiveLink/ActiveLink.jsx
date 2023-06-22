import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={`font-semibold uppercase bg-opacity-10 hover:bg-opacity-10 red rounded-none px-[10px] text-white block lg:inline-block lg:mt-0 ${({ isActive }) => isActive && 'active'}`}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
