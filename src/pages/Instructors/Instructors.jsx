import InstructorCard from "../../components/Card/InstructorCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../shared/Container/Container";


const Instructors = () => {
    const carditem = [
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
    ]
    return (
        <Container>
            <SectionTitle
                heading={'Instructors'}
                subHeading={'this is the section where get we actually our Instructors'}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    carditem.map((item, index) =>
                        <InstructorCard
                            key={index}
                            img={'https://i.ibb.co/wsmh5Dx/317149.webp'}
                            name={'Awland Doland'}
                            email={'awland.doland@gmail.com'}
                            total_class={20}
                            class_names={['hi', 'hello', 'gelo']}
                        ></InstructorCard>
                    )
                }
            </div>
        </Container >
    );
};

export default Instructors;