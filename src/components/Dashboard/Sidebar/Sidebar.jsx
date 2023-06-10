import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProviders'
import SmallScreenNavbar from '../SmallScreenNavbar/SmallScreenNavbar'
import SidebarMenu from '../SidebarMenu/SidebarMenu'

const Sidebar = () => {
    const navigate = useNavigate()
    // const [toggle, setToggle] = useState(false)
    const { user, menuloading, logOut, role } = useContext(AuthContext)

    const [isActive, setActive] = useState('false')
    // const toggleHandler = event => {
    //     setToggle(event.target.checked)
    // }

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
                role={role}
                user={user}
                menuloading={menuloading}
            // toggleHandler={toggleHandler}
            // toggle={toggle}
            ></SidebarMenu>
        </>
    )
}

export default Sidebar