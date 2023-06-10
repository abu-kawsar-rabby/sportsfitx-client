import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure(`/users`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, users]

}
export default useUsers;