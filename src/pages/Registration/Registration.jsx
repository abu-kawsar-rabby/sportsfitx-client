import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProviders';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        const { name, imageURL, email, password } = data;
        createUser(email, password)
            .then(result => {
                // update User Profile
                updateUserProfile(name, imageURL)
                    .then(() => {
                        const user = result?.user;
                        console.log(user)
                        toast.success('registration successful')
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    };
    return (
        <div className='flex justify-center p-5 md:p-0 items-center bg-image min-h-screen'>
            <div className='md:w-1/3 p-10 box border rounded-2xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-white text-2xl font-bold my-5'>Please Register !</h3>
                    <div className='w-full mb-5'>
                        <p className="text-white text-lg font-semibold">Name</p>
                        <input className='w-full rounded-md p-3 input-border input' type="name" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className='w-full mb-5'>
                        <p className="text-white text-lg font-semibold">imageURL</p>
                        <input className='w-full rounded-md p-3 input-border input' type="imageURL" placeholder="imageURL" {...register("imageURL", { required: true, maxLength: 80 })} />
                        {errors.imageURL && <span className="text-red-600">imageURL is required</span>}
                    </div>
                    <div className='w-full mb-5'>
                        <p className="text-white text-lg font-semibold">Email</p>
                        <input className='w-full rounded-md p-3 input-border input' type="email" placeholder="Email" {...register("email", { required: true, maxLength: 80 })} />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className='w-full'>
                        <p className="text-white text-lg font-semibold">Password</p>
                        <input className='w-full rounded-md p-3 input-border input' type="password" placeholder="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                    </div>
                    <div className='my-5'>
                        <input className='w-full btn btn-warning text-white hover:bg-yellow-600' type="submit" value="Register" />
                    </div>
                </form>
                <div className="divider divide-white text-white">OR</div>
                <div className=''>
                    <SocialLogin></SocialLogin>
                    <h3 className='text-white text-sm'>Already have any account? <Link to='/login'>Please Login</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Registration;