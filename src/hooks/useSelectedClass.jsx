import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useSelectedClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['selected-class'],
        queryFn: async () => {
            const res = await axiosSecure(`/selected-class?email=${user.email}`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, classes]

}
export default useSelectedClass;