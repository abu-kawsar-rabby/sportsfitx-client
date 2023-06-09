import PropTypes from 'prop-types';
import { TbFidgetSpinner } from 'react-icons/tb'
const AddClassForm = ({ handleSubmit, loading }
) => {
    return (
        <div className='w-3/4 mx-auto min-h-[calc(100vh-40px)] text-gray-800 rounded-xl bg-gray-50'>
            <form
                onSubmit={handleSubmit}
            >
                <div className='space-y-6'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='Class' className='block text-gray-600'>
                            Class Name:
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500  '
                            name='Class'
                            id='Class'
                            type='text'
                            placeholder='Class'
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='category' className='block text-gray-600'>
                            Category
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 '
                            name='category'
                        >
                            {/* {categories?.map(category => (
                                    <option value={category.label} key={category.label}>
                                        {category.label}
                                    </option>
                                ))} */}
                            <option>cricket</option>
                            <option>football</option>
                        </select>
                    </div>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-6'>
                        <label htmlFor='picture' className='block text-gray-600'>
                            Picture Upload
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-secondary rounded-none w-full" />
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
                                name='seats'
                                id='seats'
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
                    duration-300
                    transition'
                >
                    {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Save & Continue'
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