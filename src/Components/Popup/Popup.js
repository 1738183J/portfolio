import React from 'react'
import './Popup.scss';
import Background from '../../Images/anneau.png';
import Style from '../../Images/style.png';
import Remove from '../../Images/remove.png';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner' style={{ backgroundImage:`url(${Background})`, backgroundSize:'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center'}}>
                <img className="style-popup" src={Style}/>
                <button className="close-btn" onClick={() => props.setTrigger(false)}><img className="remove-btn" src= {Remove}/></button>
                { props.children}
            </div>
        </div>
    ) :"";
}

export default Popup