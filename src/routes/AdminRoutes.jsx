import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Loader from "../components/Loader/Loader";
import useUser from "../hooks/useUser";


const AdminRoute = ({ children }) => {
    const { role, loading } = useContext(AuthContext);
    const [isLoading] = useUser()
    const location = useLocation();

    if (loading && isLoading) {
        return <Loader></Loader>
    }

    if (role && role === 'admin') {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;