import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['manage-users'],
        queryFn: async () => {
            const res = await axiosSecure(`/manage-users`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, users]

}
export default useManageUsers;