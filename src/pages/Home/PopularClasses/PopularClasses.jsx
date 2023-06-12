import Swal from "sweetalert2";
import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";
import Container from "../../shared/Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const PopularClasses = () => {
    const [refetch, classes] = useClasses();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleSelectClass = classItem => {
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
                console.log(res.data);
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
    }

    return (
        <Container>
            <SectionTitle
                heading={'Popular classes'}
                subHeading={'this is the section where get we actually our popular classes'}
            ></SectionTitle>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    classes.map(classItem =>
                        <Card
                            key={classItem._id}
                            classItem={classItem}
                            handleSelectClass={handleSelectClass}
                        ></Card>
                    )
                }
            </div>
        </Container >
    );
};

export default PopularClasses;