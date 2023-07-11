import { useContext } from "react";
import AddClassForm from "../../../components/Form/AddClassForm";
import { AuthContext } from "../../../providers/AuthProviders";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { imageUploader } from "../../../api/imageUploader";
import { useQuery } from "@tanstack/react-query";


const UpdateClass = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure();

    const { data: classItem = [] } = useQuery({
        queryKey: ['my-classes', user],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${id}`)
            return res.data;
        },
    })


    // handle form submit
    const handleSubmit = event => {
        event.preventDefault()
        setLoading(true)
        const className = event.target.className.value;
        const image = event.target.image.files[0];
        const price = event.target.price.value;
        const total_seats = event.target.total_seats.value;

        // Upload image
        imageUploader(image)
            .then(data => {
                const classData = {
                    className,
                    price: parseFloat(price),
                    total_seats: parseInt(total_seats),
                    image: data.data.display_url,
                }

                // put class data to server
                axiosSecure.patch(`/my-classes/${id}`, classData)
                    .then(data => {
                        console.log(data)
                        setLoading(false)
                        toast.success('Class modified!')
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
                classItem={classItem}
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </>
    );
};

export default UpdateClass;