import { NavLink } from 'react-router-dom'
import { BiBookAdd } from 'react-icons/bi'
import { BiSelectMultiple } from 'react-icons/bi'
import { TfiWallet } from 'react-icons/tfi'

const StudentMenu = () => {
    return (
        <>
            <NavLink
                to='/dashboard/my-selected-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BiBookAdd className='w-5 h-5' />
                <span className='mx-4 font-medium'>My Selected Class</span>
            </NavLink>
            <NavLink
                to='/dashboard/my-enrolled-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BiSelectMultiple className='w-5 h-5' />
                <span className='mx-4 font-medium'>My Enrolled Class</span>
            </NavLink>
            <NavLink
                to='/dashboard/payment-history'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <TfiWallet className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment History</span>
            </NavLink>
        </>
    )
}

export default StudentMenu