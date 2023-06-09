import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
        ],
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/dashboard/my-selected-classes',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: '/dashboard/my-enrolled-classes',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: '/dashboard/profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/dashboard/add-new-class',
                element: <AddClass></AddClass>
            },
        ]
    },
])

export default router;