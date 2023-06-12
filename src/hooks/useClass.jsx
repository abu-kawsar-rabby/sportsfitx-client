import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading, user } = useContext(AuthContext);

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['my-classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/my-classes?email=${user.email}`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, classes]

}
export default useClass;