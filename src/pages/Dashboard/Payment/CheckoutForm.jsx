import PropTypes from 'prop-types';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './CheckoutForm.css';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { ImSpinner9 } from 'react-icons/im'
import { AuthContext } from '../../../providers/AuthProviders';
import useClasses from '../../../hooks/useClasses';

const CheckoutForm = ({ classItem }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: classItem.price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }, [classItem.price, axiosSecure])

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || 'anonymous',
                        email: user.email || 'unknown',
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError)
        }
        console.log(paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            const transectionId = paymentIntent.id;
            setTransectionId(transectionId)

            // save payment information to the server
            const payment = {
                email: user.email,
                transectionId,
                price: classItem.price,
                date: new Date(),
                service: 'pending',
                classId: classItem.classId,
                className: classItem.className
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        Swal.fire('hi payment donnnnnnnnnnnnee')
                        refetch()
                    }
                })
        }
    };

    return (
        <div className='w-2/4 mx-auto'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    type='submit'
                    disabled={!stripe || !clientSecret || processing}
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                >
                    {processing ? (
                        <ImSpinner9 className='m-auto animate-spin' size={24} />
                    ) : (
                        `Pay ${classItem.price}$`
                    )}
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {transectionId && <p className='text-green-600'> Payment succesfull with transection id: {transectionId}</p>}
        </div>
    );
};
CheckoutForm.propTypes = {
    classItem: PropTypes.any
};
export default CheckoutForm;