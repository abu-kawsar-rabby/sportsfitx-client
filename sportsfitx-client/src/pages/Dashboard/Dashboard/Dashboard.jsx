import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="min-h-[74vh]">
            <h1 className="text-5xl font-bold text-center">Wellcome Back! {user.displayName}</h1>
        </div>
    );
};

export default Dashboard;