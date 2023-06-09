import PropTypes from 'prop-types';

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                hover:opacity-100
                px-6
                py-2
                text-xl
                hover:-translate-y-1
                hover:mb-[1px]
                duration-300
                transition
                ${outline ? 'bg-white' : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600'}
                ${outline ? 'border-black' : 'border-rose-500'}
                ${outline ? 'text-black' : 'text-white'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
              `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className='
                    absolute
                    left-4
                    top-3
                  '
                />
            )}
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.any,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    icon: PropTypes.elementType
};

export default Button;
