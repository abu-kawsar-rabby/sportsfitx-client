import Card from "../../components/Card/Card";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClasses from "../../hooks/useClasses";
import Container from "../shared/Container/Container";


const Classes = () => {
    const [, classes] = useClasses();
    return (
        <Container>
            <SectionTitle
                heading={'All classes'}
                subHeading={'this is the section where get we actually our classes'}
            ></SectionTitle>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    classes?.map((classItem, index) =>
                        <Card
                            key={index}
                            classItem={classItem}
                        ></Card>
                    )
                }
            </div>
        </Container >
    );
};

export default Classes;