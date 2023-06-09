import PropTypes from 'prop-types';
import Button from "../Button/Button";

const Card = ({ img, title, instructor, seats, price }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl group rounded-none">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name {title}</h2>
                    <p>instructor Name: {instructor}</p>
                    <p>Available Seats: {seats}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <Button label="Enrolled Now"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    img: PropTypes.any,
    title: PropTypes.any,
    instructor: PropTypes.any,
    seats: PropTypes.any,
    price: PropTypes.any,
};

export default Card;