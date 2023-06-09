import PropTypes from 'prop-types';
import { AiOutlineBars } from "react-icons/ai";

const SmallScreenNavbar = ({ handleToggle }) => {
    return (
        <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
            <div>
                <div className='block cursor-pointer p-4 font-bold'>
                    <h1 className='text-3xl font-bold'>SportFitX</h1>
                </div>
            </div>

            <button
                onClick={handleToggle}
                className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
            >
                <AiOutlineBars className='h-5 w-5' />
            </button>
        </div>
    );
};
SmallScreenNavbar.propTypes = {
    handleToggle: PropTypes.any
};

export default SmallScreenNavbar;