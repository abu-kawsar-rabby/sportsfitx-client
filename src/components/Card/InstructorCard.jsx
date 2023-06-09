import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const InstructorCard = ({ _id, img, name, email, total_class, class_names }) => {
    return (
        <div className="md:hover:-mt-4 ease-linear duration-200">
            <div className="card w-96 glass">
                <figure><img src={img}
                    alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Email: {email}</p>
                    <p>total class: {total_class}</p>
                    <p>classlist: {class_names}</p>
                    <div className="card-actions">
                        <Link to={`/instructor/${_id}`}>
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
                            >See classes!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

InstructorCard.propTypes = {
    _id: PropTypes.any,
    img: PropTypes.any,
    name: PropTypes.any,
    email: PropTypes.any,
    total_class: PropTypes.any,
    class_names: PropTypes.any,
};

export default InstructorCard;