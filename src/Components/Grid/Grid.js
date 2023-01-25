import React from 'react';
import './Grid.scss';
import Ardoise from '../../Images/Ardoise.png';
import Portfolio from '../../Images/Portfolio.png';
import Oni from'../../Images/oni.png';

const Grid = props => {

    return (
        <div className="grid-container">
            <div className='item'><a href="https://adroise.netlify.app/"><img src = {Ardoise} className="ardoise" alt=""/></a></div>
            <div className='item'><a href="https://jacobgodbout3.myportfolio.com/"><img src = {Portfolio} className="portfolio" alt=""/></a></div>
            <div className='item'><a href="https://oniorigin.firebaseapp.com/"><img src = {Oni} className="portfolio" alt=""/></a></div>
        </div>
    );
};

export default Grid;
