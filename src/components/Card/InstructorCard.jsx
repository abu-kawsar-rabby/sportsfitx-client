import { Link } from 'react-router-dom';

const InstructorCard = ({ user }) => {
    const { email, image, name } = user;
    console.log(user)
    return (
        <div className="md:hover:-mt-4 ease-linear duration-200">
            <div className="card w-96 h-[80vh] glass">
                <figure><img src={image}
                    alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Email: {email}</p>
                    {/* <p>total class: {total_class}</p>
                    <p>classlist: {class_names}</p> */}
                    <div className="card-actions">
                        <Link>
                            <button
                                type='submit'
                                className='btn-sportsfitx'
                            >See classes!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;