import React from 'react';
import { Link } from 'react-router-dom';
import '../style/mileage.css';
import imgfile from '../ranking.PNG';
import imgfile2 from '../goal.png';
import imgfile3 from '../1st.PNG';
import imgfile4 from '../2nd.PNG';
import imgfile5 from '../3rd.PNG';

function Mileage(){
    return(
    <div className="App-header">
        <header className="header">
        <div className="menu-bar"></div>
        <div className="team-name"> HELLO BADMINTON </div>
        <div className="mileage"> 167,000 </div>
        <div className="m">mileage</div>
        <Link to= './mileage'><button className="M-1">MILEAGE</button></Link>
        <Link to='./challenge'><button className="M-2">CHALLENGE</button></Link>
        <Link to='./management'> <button className="M-3">MANAGEMENT</button> </Link>
        <div className="goal"> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;GOAL</div>
        <div className="ranking"> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;RANKING</div>
        <button className="plus">+</button>
        <div className="line"></div>
        <div className="line2"></div>
        <div className="rec1"></div>
        <div className="cir1"></div>
        <div className="rec2"></div>
        <div className="cir2"></div>
        <img className="Goalimg" src={imgfile2}/>
        <img className="Rankimg" src={imgfile} />
        <div className="Our">My Group: No.</div>
        <div className="first"></div>
        <img className="star1" src={imgfile3}/>
        <div className="team1">1st</div>
        <div className="team-name1">HEALTHERS</div>
        <div className="mileage1">431,800</div>
        <div className="mileage-1">mileage</div>
        <div className="second"></div>
        <img className="star2" src={imgfile4}/>
        <div className="team2">2nd</div>
        <div className="team-name2">FOOTBALL LOVERS</div>
        <div className="mileage2">397,000</div>
        <div className="mileage-2">mileage</div>
        <div className="third"></div>
        <img className="star3" src={imgfile5}/>
        <div className="team3">3rd</div>
        <div className="team-name3">YO! YOGA!</div>
        <div className="mileage3">311,200</div>
        <div className="mileage-3">mileage</div>
        <div className="fourth">&nbsp;&nbsp;&nbsp;4</div>
        <div className="fifth">&nbsp;&nbsp;&nbsp;5</div>
        <div className="sixth">&nbsp;&nbsp;&nbsp;6</div>
        </header>     
    </div>
    );
}

export default Mileage;