import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';
import DashboardNavbar from '../pages/Dashboard/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>
                    <DashboardNavbar></DashboardNavbar>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;