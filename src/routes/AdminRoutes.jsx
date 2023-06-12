import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Loader from "../components/Loader/Loader";


const AdminRoute = ({ children }) => {
    const { role, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (role === 'admin') {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;