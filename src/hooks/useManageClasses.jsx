import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['manage-classes'],
        queryFn: async () => {
            const res = await axiosSecure(`/manage-classes`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, classes]

}
export default useManageClasses;