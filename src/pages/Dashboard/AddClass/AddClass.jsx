import { useContext, useState } from "react";
import AddClassForm from "../../../components/AddClassForm/AddClassForm";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { imageUploader } from "../../../api/imageUploader";
import { addRoom } from "../../../api/rooms";
import { toast } from "react-hot-toast";


const AddClass = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    // handle form submit
    const handleSubmit = event => {
        event.preventDefault()
        setLoading(true)
        const location = event.target.location.value
        const title = event.target.title.value
        const price = event.target.price.value
        const guests = event.target.total_guest.value
        const bedrooms = event.target.bedrooms.value
        const bathrooms = event.target.bathrooms.value
        const description = event.target.description.value
        const category = event.target.category.value
        const image = event.target.image.files[0]

        // Upload image
        imageUploader(image)
            .then(data => {
                const roomData = {
                    location,
                    title,
                    price: parseFloat(price),
                    guests,
                    bedrooms,
                    bathrooms,
                    description,
                    image: data.data.display_url,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    },
                    status: 'pending',
                    category,
                }

                // post room data to server
                addRoom(roomData)
                    .then(data => {
                        console.log(data)
                        setLoading(false)
                        toast.success('Class Added!')
                        navigate('/dashboard/my-listings')
                    })
                    .catch(err => console.log(err))

                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false)
            })
    }



    return (
        <div>
            <SectionTitle
                heading={"Add New Class"}
                subHeading={'this is the section for you where you can add a new class'}
            ></SectionTitle>
            <AddClassForm
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </div>
    );
};

export default AddClass;