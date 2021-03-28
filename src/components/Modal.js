import React from 'react';

function Modal(){
    return(
        <div className="modal-container">
            <div className="modal-box">
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p>Loading, please wait.</p>
            </div>
        </div>
    )
}

export default Modal;