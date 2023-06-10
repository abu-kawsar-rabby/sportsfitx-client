import PropTypes from 'prop-types';


const DenyModal = ({ modalRef, classItem, handleDeny, closeModal }) => {
    return (
        <dialog
            ref={ref => (modalRef.current[classItem._id] = ref)}
            id={`modal_${classItem._id}`}
            className="modal modal-bottom sm:modal-middle"
        >
            <div method="dialog" className="modal-box space-y-5">
                <h3 className="font-bold text-lg">Feedback!</h3>
                <form onSubmit={() => handleDeny(classItem)}>
                    <textarea
                        name='feedback'
                        className="textarea textarea-error w-full" placeholder="........." />
                    <button type="submit" className="btn-sportsfitx mt-5">
                        Submit
                    </button>
                </form>
                <div className='relative'>
                    <button
                        onClick={() => closeModal(classItem)}
                        className="btn-sportsfitx absolute right-0 bottom-[18px]" >
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

DenyModal.propTypes = {
    modalRef: PropTypes.any,
    classItem: PropTypes.any,
    handleDeny: PropTypes.any,
    closeModal: PropTypes.any
};

export default DenyModal;