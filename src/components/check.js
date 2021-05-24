import React from 'react';
import { Link } from 'react-router-dom';
import '../style/check.css';

function check(){
    return(
    <div className="App-header">
        <header className="header">
        <div className="menu-bar"></div>
        <div className="team-name"> HELLO BADMINTON </div>
        <div className="mileage"> 167,000 </div>
        <div className="m">mileage</div>
        <Link to= './mileage'><button className="M1">MILEAGE</button></Link>
        <Link to='./challenge'><button className="M2">CHALLENGE</button></Link>
        <Link to='./management'> <button className="M3">MANAGEMENT</button> </Link>
        <div className="bg"></div>
        <div className="sending-group">Sending Group</div>
        <div className="sending-group-name">HELLO BADMINTON</div>
        <div className="receiving-group">Receiving Group</div>
        <div className="receiving-group-name">BADMINTON LOVERS</div>
        <div className="Betting-mileage">Betting Mileage</div>
        <div className="betmileage">5,000M</div>
        <div className="Contents">Contents</div>
        <div className="Box">&nbsp;&nbsp;&nbsp;&nbsp;Let's do this!!!</div>
        <div className="message">Send the challenge of the above spending 5000 mileages!</div>
        <Link to='./challenge'> <button className="no">NO</button> </Link>
        <Link to='./challenge-send'> <button className="yes">➜ YES!</button> </Link>

        </header>     
    </div>
    );
}

export default check;