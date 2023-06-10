import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProviders';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const newUser = { name: user.displayName, email: user.email, image: user.photoURL, role: 'student' }
                axiosSecure.post(`/users`, newUser)
                    .then(() => {
                        toast.success('Google login successful')
                        navigate('/')
                    })
                    .catch(error => {
                        toast.error(error.message)
                        console.log(error.message);
                    })
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div className='my-5 flex'>
            <button
                onClick={handleGoogleLogin}
                className='w-full btn-sportsfitx flex items-center justify-center gap-2 text-base font-semibold'>
                <FcGoogle size={28}></FcGoogle>Sign up with Google
            </button>
        </div>
    );
};

export default SocialLogin;