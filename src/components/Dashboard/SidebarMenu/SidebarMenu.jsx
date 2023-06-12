import PropTypes from 'prop-types';
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import AdminMenu from '../Menu/AdminMenu';
import InstructorMenu from '../Menu/InstructorMenu';
import StudentMenu from '../Menu/StudentMenu';

const SidebarMenu = ({ handleLogOut, isActive, role, user }) => {
    return (
        <div
            className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
            <div>
                {/* Branding & Profile section */}
                <SidebarHeader user={user}></SidebarHeader>

                {/* Nav Items */}
                <div className='flex flex-col justify-between flex-1 mt-6'>
                    <nav>
                        {
                            role === 'admin'
                                ? (<AdminMenu />)
                                : role === 'instructor'
                                    ? (<InstructorMenu />)
                                    : role === 'student'
                                    && (<StudentMenu />)

                        }
                    </nav>
                </div>
            </div>

            {/* profile & logout section */}
            <SidebarFooter handleLogOut={handleLogOut}></SidebarFooter>

        </div>
    );
};

SidebarMenu.propTypes = {
    handleLogOut: PropTypes.any,
    isActive: PropTypes.any,
    role: PropTypes.any,
    user: PropTypes.any,
    toggleHandler: PropTypes.any,
    toggle: PropTypes.any,
};

export default SidebarMenu;