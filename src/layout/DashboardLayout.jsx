import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar/DashboardNavbar';
import DashboardFooter from '../components/Dashboard/DashboardFooter/DashboardFooter';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1  md:ml-64'>
                <div className='p-5 space-y-5'>
                    <div className='hidden md:block'>
                        <DashboardNavbar />
                    </div>
                    <Outlet />
                </div>
                <DashboardFooter />
            </div>
        </div>
    )
}

export default DashboardLayout;