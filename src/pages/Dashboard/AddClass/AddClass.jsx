import { useContext, useState } from "react";
import AddClassForm from "../../../components/Form/AddClassForm";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { imageUploader } from "../../../api/imageUploader";
import { addClass } from "../../../api/rooms";
import { toast } from "react-hot-toast";


const AddClass = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    // handle form submit
    const handleSubmit = event => {
        event.preventDefault()
        setLoading(true)
        const className = event.target.className.value
        const image = event.target.image.files[0]
        const price = event.target.price.value
        const total_seats = event.target.total_seats.value
        const description = event.target.description.value

        // Upload image
        imageUploader(image)
            .then(data => {
                const classData = {
                    className,
                    price: parseFloat(price),
                    total_seats: parseInt(total_seats),
                    description,
                    image: data.data.display_url,
                    status: 'pending',
                    instructor: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    },
                }

                // post class data to server
                addClass(classData)
                    .then(data => {
                        console.log(data)
                        setLoading(false)
                        toast.success('Class Added!')
                        navigate('/dashboard/my-classes')
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
        <>
            <AddClassForm
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </>
    );
};

export default AddClass;