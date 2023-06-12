import Card from "../../../components/Card/Card";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePopularClasses from "../../../hooks/usePopularClasses";
import Container from "../../shared/Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const PopularClasses = () => {
    const [refetch, classes] = usePopularClasses();
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <Container>
            <SectionTitle
                heading={'Popular classes'}
                subHeading={'this is the section where get we actually our popular classes'}
            ></SectionTitle>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    classes?.map(classItem =>
                        <Card
                            key={classItem._id}
                            classItem={classItem}
                            refetch={refetch}
                        ></Card>
                    )
                }
            </div>
        </Container >
    );
};

export default PopularClasses;