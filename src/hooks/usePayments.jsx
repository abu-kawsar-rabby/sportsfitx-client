import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const usePayments = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user.email}`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, payments]

}
export default usePayments;