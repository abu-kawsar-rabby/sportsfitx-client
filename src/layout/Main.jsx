import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Loader from "../components/Loader/Loader";


const Main = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loader />
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;