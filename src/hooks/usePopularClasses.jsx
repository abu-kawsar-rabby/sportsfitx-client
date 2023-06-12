import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const usePopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user],
        queryFn: async () => {
            const res = await axiosSecure(`/popular-classes`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, classes]

}
export default usePopularClasses;