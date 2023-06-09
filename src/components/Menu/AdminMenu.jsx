import { NavLink } from 'react-router-dom'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
const AdminMenu = () => {
    return (
        <>
            <NavLink
                to='/dashboard/manage-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdHomeWork className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Classes</span>
            </NavLink>
            <NavLink
                to='/dashboard/manage-users'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <MdOutlineManageHistory className='w-5 h-5' />

                <span className='mx-4 font-medium'>Manage Users</span>
            </NavLink>
        </>
    )
}

export default AdminMenu