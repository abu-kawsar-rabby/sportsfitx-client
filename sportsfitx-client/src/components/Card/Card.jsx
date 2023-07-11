import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Card = ({ classItem, refetch }) => {
    const { image, className, instructor, total_seats, price } = classItem;
    const { user, role } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const handleSelectClass = classItem => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'please login to select class',
                showConfirmButton: false,
                timer: 1500
            })
            refetch();
        }
        const selectedClass = {
            studentName: user.displayName,
            studentEmail: user.email,
            classId: classItem._id,
            className: classItem.className,
            image: classItem.image,
            total_seats: classItem.total_seats,
            price: classItem.price,
            instructor: classItem.instructor
        }
        axiosSecure.post('/selected-class', selectedClass)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Selected successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
        refetch();
    }
    return (
        <div>
            <div className={`card h-96 card-compact bg-base-100 shadow-xl group rounded ${total_seats <= 0 && 'bg-red-300'}`}>
                <figure><img src={image} className="w-screen h-[35vh]" alt={className} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <p>instructor Name: {instructor?.name}</p>
                    <p>Available Seats: {total_seats}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button onClick={() => handleSelectClass(classItem)}
                            disabled={role === 'admin' || role === 'instructor' || total_seats <= 0} className={`btn-sportsfitx !px-10 ${role === 'admin' || role === 'instructor' || total_seats <= 0 && 'disabled'}`}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;