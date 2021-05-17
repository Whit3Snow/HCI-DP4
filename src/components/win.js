import React from 'react';
import imgfile from '../congratulations.png';
import '../style/win.css';
import { Link } from 'react-router-dom';

function win(){
    return(
    <div className="App-header">
        <header className="header">
        <div className="menu-bar"></div>
        <div className="team-name"> HELLO BADMINTON </div>
        <div className="back"></div>
        <img className="con" src={imgfile} />
        <Link to='./management'> <button className="Get">GET MILEAGE!</button> </Link>
        </header>     
    </div>
    );
}

export default win;