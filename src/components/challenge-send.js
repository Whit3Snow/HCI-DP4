import React from 'react';
import imgfile from '../circle.jpg';
import { Link } from 'react-router-dom';

import '../style/send.css';


function Challenge() {
  return (
    <div className="App-header">
      <header className="header">
      <div className="menu-bar"></div>
      <div className="team-name"> HELLO BADMINTON </div>
      <div className="mileage"> 167,000 </div>
      <div className="m">mileage</div>
      <Link to= './mileage'><button className="m1">MILEAGE</button></Link>
      <Link to='./challenge'><button className="m2">CHALLENGE</button></Link>
      <Link to='./management'> <button className="m3">MANAGEMENT</button> </Link>
      <div className="Sent">Sent Successfully!</div>
      <img className="Circle" src={imgfile} />
      </header>     
    </div>
  );
}

export default Challenge;