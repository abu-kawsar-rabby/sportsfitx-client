import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const usePopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['popular-instructor'],
        queryFn: async () => {
            const res = await axiosSecure(`/instructor`)
           
            return res.data;
        },
    })

    return [refetch, instructors]

}
export default usePopularInstructors;