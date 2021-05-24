import React from 'react';
import { Link } from 'react-router-dom';
import '../style/challenge.css';


function Challenge(){
    var size = 1520;
    var zoom = window.innerWidth / size 

    document.body.style.zoom = zoom;
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
        
        <div className="warning"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Each challenge is 5000 mileages. And if your opponent reject your challenge, you can get it again!</div>
        <div className="available">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mileage available for betting</div>
        <div className="circle"></div>
        <div className="w">!</div>
        
        <div className="betting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Betting mileage</div>
        <div className="circle2"></div>
        <div className="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Challenge</div>
        <div className="circle3"></div>
        <button className="reset">RESET</button>
        <input type="text" id="bettinginput"/>
        <div className="receiving">Receiving Group</div>
        <input type="text" id="bettinginput2"/>
        <div className="contents">Contents</div>
        <input type="text" id="bettinginput3"/>
        <Link to='./check'><button className="send">SEND</button> </Link>
        </header>     
    </div>
    );
}

export default Challenge;