import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={`text-lg uppercase bg-opacity-10 hover:bg-opacity-10 red rounded-none py-3 px-[10px] text-white block font-semibold lg:inline-block lg:mt-0 ${({ isActive }) => isActive && 'active'}`}
        >
            {children}
        </NavLink>
    );
};

ActiveLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ActiveLink;
