import { Link } from 'react-router-dom';

const InstructorCard = ({ instructor }) => {
    const { email, image, name } = instructor;
    console.log(instructor)
    return (
        <div className="md:hover:-mt-4 ease-linear duration-200">
            <div className="card w-96 glass">
                <figure><img src={image}
                    className='w-screen h-[45vh]'
                    alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Email: {email}</p>
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