import React from 'react'
import './PopupWork2.scss';
import Remove from '../../Images/remove.png';

function PopupWork2(props) {
    return (props.trigger) ? (
        <div className='popupWork2'>
            <div className='popupWork2-inner'>
                <button className="close-btn" onClick={() => props.setTrigger(false)}><img className="remove-btn" src= {Remove} alt="remove-btn"/></button>
                { props.children}
            </div>
        </div>
    ) :"";
}

export default PopupWork2