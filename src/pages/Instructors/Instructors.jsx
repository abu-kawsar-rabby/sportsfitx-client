import InstructorCard from "../../components/Card/InstructorCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import usePopularInstructors from "../../hooks/useInstructors";
import Container from "../shared/Container/Container";


const Instructors = () => {
    const [, instructors] = usePopularInstructors();
    return (
        <Container>
            <SectionTitle
                heading={'Instructors'}
                subHeading={'this is the section where get we actually our Instructors'}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    instructors?.map(instructor =>
                        <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorCard>
                    )
                }
            </div>
        </Container >
    );
};

export default Instructors;