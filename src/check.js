import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/check.css';
import {db,firebaseApp, firebase} from "../firebase.js"

function check(props){

    function numberWithCommas(x) {
        return (x+"").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    console.log(props.location.state.bet);
    console.log(props.location.state.groupname);
    var groupname = props.location.state.group;
    var mileage = props.location.state.mileage;
    var bet = props.location.state.bet;
    var contents = props.location.state.contents;
    var rgroup = props.location.state.rgroup;

    

    // var docRef = db.collection("Groups").doc(groupname).challenge;

    // const sendClick = () => {
    //     const batch = db.batch();

    //     batch.set(docRef,{
    //         bet: bet,
    //         contents : contents,
    //         send : 1,
    //         withgroup: rgroup
    //     })
    // };

    
    // useEffect(() => {
    //     var groupname = props.location.state.groupname;
    // })

    return(
    <div className="App-header">
        <header className="header">
        <div className="menu-bar"></div>
        <div className="team-name">{groupname}</div>
        <div className="mileage"> {numberWithCommas(mileage)} </div>
        <div className="m">mileage</div>
        <Link to= './mileage'><button className="M1">MILEAGE</button></Link>
        <Link to='./challenge'><button className="M2">CHALLENGE</button></Link>
        <Link to='./management'> <button className="M3">MANAGEMENT</button> </Link>
        <div className="bg"></div>
        <div className="sending-group">Sending Group</div>
        <div className="sending-group-name">HELLO BADMINTON</div>
        <div className="receiving-group">Receiving Group</div>
        <div className="receiving-group-name">{props.location.state.rgroup}</div>
        <div className="Betting-mileage">Betting Mileage</div>
        <div className="betmileage">{numberWithCommas(props.location.state.bet)}M</div>
        <div className="Contents">Contents</div>
        <div className="Box">&nbsp;&nbsp;&nbsp;&nbsp;{props.location.state.contents}</div>
        <div className="message">Send the challenge of the above spending 5000 mileages!</div>
        <Link to={{pathname :'./challenge', state : {group: props.location.state.group, user:props.location.state.user}}}><button className="no">NO</button> </Link>
        <Link to={{pathname :'./challenge-send', state : {group : groupname, mileage : mileage, user:props.location.state.user}}}><button className="yes">➜ YES!</button> </Link>

        </header>     
    </div>
    );
}

export default check;