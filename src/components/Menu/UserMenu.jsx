import { NavLink } from 'react-router-dom'
import { BsFillHouseAddFill, BsFingerprint } from 'react-icons/bs'

const UserMenu = () => {
    return (
        <>
            <NavLink
                to='/dashboard/my-selected-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsFingerprint className='w-5 h-5' />
                <span className='mx-4 font-medium'>My Selected Class</span>
            </NavLink>
            <NavLink
                to='/dashboard/my-enrolled-classes'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsFingerprint className='w-5 h-5' />
                <span className='mx-4 font-medium'>My Enrolled Class</span>
            </NavLink>
            <NavLink
                to='/dashboard/payment-history'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <BsFillHouseAddFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment History</span>
            </NavLink>
        </>
    )
}

export default UserMenu