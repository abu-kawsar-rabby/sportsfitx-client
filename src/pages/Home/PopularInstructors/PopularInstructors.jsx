import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../shared/Container/Container";


const PopularInstructors = () => {
    const carditem = [
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
    ]
    return (
        <Container>
            <SectionTitle
                heading={'Popular Instructors'}
                subHeading={'this is the section where get we actually our popular instructors'}
            ></SectionTitle>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    carditem.map((item, index) => <Card
                        key={index}
                        img={'https://i.ibb.co/0ngPcQQ/istockphoto-1361355221-612x612.jpg'}
                        title={'Merry curry'}
                    ></Card>)
                }
            </div>
        </Container>
    );
};

export default PopularInstructors;