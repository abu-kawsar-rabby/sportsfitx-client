import Checkout from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);

const Payment = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();

    const { data: classItem } = useQuery({
        queryKey: ['selected-class', id],
        queryFn: async () => {
            const res = await axiosSecure(`/selected-class/${id}`);
            return res.data;
        }
    })

    return (
        <div>
            <div className='my-2 text-center'>
                <h1 className='text-5xl font-bold my-5'>Processed to Pay ${classItem?.price}</h1>
            </div>
            {classItem && <Elements stripe={stripePromise}>
                <Checkout classItem={classItem}></Checkout>
            </Elements>}
        </div>
    );
};

export default Payment;