import InstructorCard from "../../components/Card/InstructorCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useUsers from "../../hooks/useUsers";
import Container from "../shared/Container/Container";


const Instructors = () => {
    const [, users] = useUsers();
    return (
        <Container>
            <SectionTitle
                heading={'Instructors'}
                subHeading={'this is the section where get we actually our Instructors'}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    users.map((user, index) =>
                        <InstructorCard
                            key={index}
                            user={user}
                        ></InstructorCard>
                    )
                }
            </div>
        </Container >
    );
};

export default Instructors;