import PropTypes from 'prop-types';
import { FcSettings } from 'react-icons/fc';
import { GrLogout } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const SidebarFooter = ({ handleLogOut }) => {
    return (
        <div>
            <hr />
            <NavLink
                to='/dashboard/profile'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FcSettings className='w-5 h-5' />

                <span className='mx-4 font-medium'>Profile</span>
            </NavLink>
            <button
                onClick={handleLogOut}
                className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
                <GrLogout className='w-5 h-5' />

                <span className='mx-4 font-medium'>Logout</span>
            </button>
        </div>
    );
};

SidebarFooter.propTypes = {
    handleLogOut: PropTypes.any
};

export default SidebarFooter;