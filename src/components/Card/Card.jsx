import PropTypes from 'prop-types';

const Card = ({ classItem, handleSelectClass }) => {
    const { image, className, instructor, total_seats, price } = classItem;
    return (
        <div>
            <div className="card h-96 card-compact bg-base-100 shadow-xl group rounded">
                <figure><img src={image} alt={className} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <p>instructor Name: {instructor?.name}</p>
                    <p>Available Seats: {total_seats}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button onClick={() => handleSelectClass(classItem)} className='btn-sportsfitx !px-10'>Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    classItem: PropTypes.any,
    handleSelectClass: PropTypes.any
};

export default Card;