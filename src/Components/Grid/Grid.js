import React from 'react';
import './Grid.scss';
import Ardoise from '../../Images/Ardoise.png';
import Portfolio from '../../Images/Portfolio.png';

const Grid = props => {

    return (
        <div className="grid-container">
            <div className='item'><a href="https://adroise.netlify.app/"><img src = {Ardoise} className="ardoise"/></a></div>
            <div className='item'><a href="https://jacobgodbout3.myportfolio.com/"><img src = {Portfolio} className="portfolio"/></a></div>
            <div className='item'>3</div>
            <div className='item'>4</div>
            <div className='item'>5</div>
            <div className='item'>6</div>
        </div>
    );
};

export default Grid;
