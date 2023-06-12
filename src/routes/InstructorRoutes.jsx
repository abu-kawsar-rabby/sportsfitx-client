import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const InstructorRoute = ({ children }) => {
    const { role, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (role === 'instructor') {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;