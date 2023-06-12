import { AiOutlineFolderAdd } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const InstructorMenu = () => {
    return (
        <div>
            <NavLink
                to='/dashboard/add-new-class'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <AiOutlineFolderAdd className='w-5 h-5' />

                <span className='mx-4 font-medium'>Add New Class</span>
            </NavLink>
            <NavLink
                to='/dashboard/my-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <CiViewList className='w-5 h-5' />

                <span className='mx-4 font-medium'>My Classes</span>
            </NavLink>
        </div>
    );
};

export default InstructorMenu;