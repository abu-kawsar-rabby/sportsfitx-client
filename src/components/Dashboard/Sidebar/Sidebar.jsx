import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProviders'
import SmallScreenNavbar from '../SmallScreenNavbar/SmallScreenNavbar'
import SidebarMenu from '../SidebarMenu/SidebarMenu'
import useUser from '../../../hooks/useUser'

const Sidebar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext);
    const [isLoading, role] = useUser();

    const [isActive, setActive] = useState('false')

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <SmallScreenNavbar handleToggle={handleToggle}></SmallScreenNavbar>
            {/* Sidebar */}
            <SidebarMenu
                handleLogOut={handleLogOut}
                isActive={isActive}
                user={user}
                role={role}
                isLoading={isLoading}
            ></SidebarMenu>
        </>
    )
}

export default Sidebar