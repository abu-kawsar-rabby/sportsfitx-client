import moment from "moment/moment";

const DashboardFooter = () => {
    return (
        <footer className="footer footer-center p-4 text-base-content">
            <div>
                <p>Copyright © {moment().format('YYYY')} - All right reserved by SportsFitX</p>
            </div>
        </footer>
    );
};

export default DashboardFooter;