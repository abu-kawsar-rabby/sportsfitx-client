import InstructorCard from "../../../components/Card/InstructorCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePopularInstructor from "../../../hooks/usePopularInstructor";
import Container from "../../shared/Container/Container";


const PopularInstructors = () => {
    const [, instructors] = usePopularInstructor();
    return (
        <Container>
            <SectionTitle
                heading={'Popular Instructors'}
                subHeading={'this is the section where get we actually our popular instructors'}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    instructors?.map(instructor =>
                        < InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorCard>
                    )
                }
            </div>
        </Container >
    );
};

export default PopularInstructors;