import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useUser = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: role, isLoading } = useQuery({
        queryKey: ['users', user],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`${import.meta.env.VITE_API_URL}/users/${user.email}`)
            return res.data.role;
        },
    })

    return [isLoading, role]

}
export default useUser;