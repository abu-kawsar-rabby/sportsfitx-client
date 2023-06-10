import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarHeader = ({ user }) => {
    return (
        <div>
            <div className='w-full hidden md:flex py-2 justify-center items-center mx-auto'>
                <Link to={'/'}><h1 className='text-4xl font-bold'>SportFitX</h1></Link>
            </div>
            <div className='md:hidden flex flex-col items-center mt-6 -mx-2'>
                <Link to='/dashboard'>
                    <img
                        className='object-cover w-24 h-24 mx-2 rounded-full'
                        src={user?.photoURL}
                        alt='avatar'
                        referrerPolicy='no-referrer'
                    />
                </Link>
                <Link to='/dashboard'>
                    <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                        {user?.displayName}
                    </h4>
                </Link>
                <Link to='/dashboard'>
                    <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                        {user?.email}
                    </p>
                </Link>
            </div>
        </div>
    );
};

SidebarHeader.propTypes = {
    user: PropTypes.any,
};

export default SidebarHeader;