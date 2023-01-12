import React from 'react'
import './PopupWork3.scss';
import Remove from '../../Images/remove.png';

function PopupWork3(props) {
    return (props.trigger) ? (
        <div className='popupWork3'>
            <div className='popupWork3-inner'>
                <button className="close-btn" onClick={() => props.setTrigger(false)}><img className="remove-btn" src= {Remove} alt="remove-btn"/></button>
                { props.children}
            </div>
        </div>
    ) :"";
}

export default PopupWork3