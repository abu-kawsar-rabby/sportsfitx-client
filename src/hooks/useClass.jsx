import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading, user } = useContext(AuthContext);

    const { refetch, data: classes = [], isLoading } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-classes?email=${user.email}`)

            return res.data;
        },
    })

    return [refetch, classes, isLoading]

}
export default useClass;