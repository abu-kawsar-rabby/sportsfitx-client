import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useUser from "../hooks/useUser";


const InstructorRoute = ({ children }) => {
    const { role, loading } = useContext(AuthContext);
    const [isLoading] = useUser();
    const location = useLocation();

    if (loading && isLoading) {
        return <Loader></Loader>
    }

    if (role === 'instructor') {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;