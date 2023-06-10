import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb'
import { AuthContext } from '../../providers/AuthProviders';
const AddClassForm = ({ handleSubmit, loading }) => {
    const { user } = useContext(AuthContext);
    return (
        <div className='md:w-3/4 mx-auto min-h-[calc(100vh-40px)] text-gray-800 p-10 rounded-box shadow-lg'>
            <form onSubmit={handleSubmit}>
                <div className='space-y-3'>
                    <div className='text-sm space-y-1'>
                        <label htmlFor='className' className='block font-bold text-gray-600'>
                            Class Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded'
                            name='className'
                            id='className'
                            type='text'
                            placeholder='Class Name'
                            required
                        />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor='picture' className='block font-bold text-gray-600'>
                            Class Image
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-error rounded w-full" name='image' />
                    </div>

                    <div className='flex justify-between gap-2'>
                        <div className='space-y-1 w-full text-sm'>
                            <label htmlFor='price' className='block font-bold text-gray-600'>
                                Instructor Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded'
                                name='name'
                                id='user'
                                type='text'
                                placeholder={user?.displayName}
                                value={user?.displayName}
                                readOnly
                            />
                        </div>
                        <div className='space-y-1 w-full text-sm'>
                            <label htmlFor='email' className='block font-bold text-gray-600'>
                                Instructor email
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded'
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
                            <label htmlFor='price' className='block font-bold text-gray-600'>
                                Price
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded'
                                name='price'
                                id='price'
                                type='number'
                                placeholder='Price'
                                required
                            />
                        </div>
                        <div className='space-y-1 w-full text-sm'>
                            <label htmlFor='seats' className='block font-bold text-gray-600'>
                                Available Seat
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded'
                                name='total_seats'
                                id='total_seats'
                                type='number'
                                placeholder='10'
                                required
                            />
                        </div>
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block font-bold text-gray-600'>
                            Description
                        </label>

                        <textarea
                            id='description'
                            className='block  focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 rounded'
                            name='description'
                        ></textarea>
                    </div>
                </div>

                <button
                    type='submit'
                    className='btn-sportsfitx w-full my-5'
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