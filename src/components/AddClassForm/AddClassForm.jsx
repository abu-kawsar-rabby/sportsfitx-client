import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb'
import { AuthContext } from '../../providers/AuthProviders';
const AddClassForm = ({ handleSubmit, loading }) => {
    const { user } = useContext(AuthContext);
    return (
        <div className='w-3/4 mx-auto min-h-[calc(100vh-40px)] text-gray-800 rounded-xl bg-gray-50'>
            <form
                onSubmit={handleSubmit}
            >
                <div className='space-y-6'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='className' className='block text-gray-600'>
                            Class Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500  '
                            name='className'
                            id='className'
                            type='text'
                            placeholder='className'
                            required
                        />
                    </div>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-6'>
                        <label htmlFor='picture' className='block text-gray-600'>
                            Class Image
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-error rounded-none w-full" name='image' />
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className='space-y-1 w-full text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Instructor Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500  '
                                name='name'
                                id='user'
                                type='text'
                                placeholder={user?.displayName}
                                value={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div className='space-y-1 w-full text-sm'>
                            <label htmlFor='email' className='block text-gray-600'>
                                Instructor email
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500'
                                name='email'
                                id='email'
                                type='text'
                                value={user?.email}
                                placeholder={user?.email}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className='space-y-1 w-full text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Price
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500  '
                                name='price'
                                id='price'
                                type='number'
                                placeholder='Price'
                                required
                            />
                        </div>
                        <div className='space-y-1 w-full text-sm'>
                            <label htmlFor='seats' className='block text-gray-600'>
                                Available Seat
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500'
                                name='total_seats'
                                id='total_seats'
                                type='number'
                                placeholder='10'
                                required
                            />
                        </div>
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Description
                        </label>

                        <textarea
                            id='description'
                            className='block  focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                            name='description'
                        ></textarea>
                    </div>
                </div>

                <button
                    type='submit'
                    className='
                    w-full
                    text-white
                    my-5
                    px-6
                    py-4
                    text-xl
                    bg-gradient-to-r from-red-400 via-red-500 to-red-600
                    transition
                    ease-linear
                    duration-200'
                >
                    {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Add Class'
                    )}
                </button>
            </form>
        </div>
    )
}

AddClassForm.propTypes = {
    handleSubmit: PropTypes.any,
    loading: PropTypes.any,
};

export default AddClassForm;