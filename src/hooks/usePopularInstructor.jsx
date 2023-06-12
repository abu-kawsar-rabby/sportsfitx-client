import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const usePopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['popular-instructor'],
        queryFn: async () => {
            const res = await axiosSecure(`/popular-instructor`)
            console.log('res from axios', res.data)
            return res.data;
        },
    })

    return [refetch, instructors]

}
export default usePopularInstructor;