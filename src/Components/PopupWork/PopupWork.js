import React from 'react'
import './PopupWork.scss';
import Remove from '../../Images/remove.png';

function PopupWork(props) {
    return (props.trigger) ? (
        <div className='popupWork'>
            <div className='popupWork-inner'>
                <button className="close-btn" onClick={() => props.setTrigger(false)}><img className="remove-btn" src= {Remove} alt="remove-btn"/></button>
                { props.children}
            </div>
        </div>
    ) :"";
}

export default PopupWork