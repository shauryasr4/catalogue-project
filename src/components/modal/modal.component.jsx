import React from 'react';
import './modal.style.scss';

export const Modal = (props) => {

    const { show, close, children, title, save } = props;

    return (
        show ? <div className='modal-overlay'>
            <div className='modal-wrapper'>
                <div className='modal-header'>
                    <h1>{title}</h1>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
                <div className='modal-footer'>
                    <button className='btn-cancel' onClick={close}>CANCEL</button>
                    <button className='btn-save' onClick={save}>APPLY</button>
                </div>
            </div>
        </div> : null
    )
}
