import Card from "../../components/Card/Card";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../shared/Container/Container";


const Classes = () => {
    const carditem = [
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
        { name: 'name' },
    ]
    return (
        <Container>
            <SectionTitle
                heading={'All classes'}
                subHeading={'this is the section where get we actually our classes'}
            ></SectionTitle>
            <div className="grid grid-cols-4 gap-5">
                {
                    carditem.map((item, index) =>
                        <Card
                            key={index}
                            img={'https://i.ibb.co/JyCXVQn/shohoje-spoken-arabic-mahade-hasan-16x9-thumbnail-new.webp'}
                            title={"সহজে Spoken আরবি"}
                            instructor={'Mahadi hasan'}
                            seats={20}
                            price={44}
                        ></Card>
                    )
                }
            </div>
        </Container >
    );
};

export default Classes;