import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-10 border-b-2 space-y-2 pb-2">
            <h1 className='text-3xl font-bold'>{heading}</h1>
            <h3>{subHeading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.any,
    subHeading: PropTypes.any,
};

export default SectionTitle;