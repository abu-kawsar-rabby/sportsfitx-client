import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProviders';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                toast.success('google login successful')
                navigate('/')
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div className='my-5'>
            <button onClick={handleGoogleLogin} className='w-full btn btn-warning text-white hover:bg-yellow-600'><FcGoogle className='mr-2' size={28}></FcGoogle> Sign up with Google</button>
        </div>
    );
};

export default SocialLogin;