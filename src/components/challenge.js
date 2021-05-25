import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../style/challenge.css';
import {db,firebaseApp, firebase} from "../firebase.js"


function Challenge(){

    var groupname = "HELLO BADMINTON";
    const [mileage, setMileage] = useState(0);
    const [mileage1, setMileage1] = useState();

    useEffect(()=>{
        var docRef = db.collection("Groups").doc(groupname)
               
        // Get a document, forcing the SDK to fetch from the offline cache.
        docRef.get().then((doc) => {
            // Document was found in the cache. If no cached document exists,
            // an error will be returned to the 'catch' block below.
            setMileage(doc.data().mileage);
            setMileage1(doc.data().mileage - 5000)
            console.log("Cached document data:", doc.data().mileage);
        }).catch((error) => {
            console.log("Error getting cached document:", error);
        });
    })
    
    
    

    const [Bet, setBet] = useState(0)
    const [Rgroup, setRgroup] = useState("")
    const [Contents, setContents] = useState("")

    const onBetHandler = (event) => {
        setBet(event.target.value)// event를 발생 시킬 수 있도록 함 --> input을 발생시킬 수 있도록 한 것임
        console.log(Bet);
    }
    const onRgroupHandler = (event) => {
        setRgroup(event.currentTarget.value)// event를 발생 시킬 수 있도록 함 --> input을 발생시킬 수 있도록 한 것임
        console.log(Rgroup);
    }
    const onContentsHandler = (event) => {
        setContents(event.currentTarget.value)// event를 발생 시킬 수 있도록 함 --> input을 발생시킬 수 있도록 한 것임
        console.log(Contents);
    }
    
    
    return(
        
        <div className="App-header">
            <header className="header">
            <div className="menu-bar"></div>
            <div className="team-name">{groupname}</div>
            <div className="mileage"> {mileage} </div>
            <div className="m">mileage</div>
            <Link to= './mileage'><button className="M1">MILEAGE</button></Link>
            <Link to='./challenge'><button className="M2">CHALLENGE</button></Link>
            <Link to='./management'> <button className="M3">MANAGEMENT</button> </Link>
            
            <div className="warning"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Each challenge is 5000 mileages. And if your opponent reject your challenge, you can get it again!</div>
            <div className="available">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mileage available for betting {mileage1}</div>
            <div className="circle"></div>
            <div className="w">!</div>
            
            <div className="betting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Betting mileage</div>
            <div className="circle2"></div>
            <div className="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Challenge</div>
            <div className="circle3"></div>
            <button className="reset">RESET</button>
            <input type="text" id="bettinginput" value = {Bet} onChange={onBetHandler}/>
            <div className="receiving">Receiving Group</div>
            <input type="text" id="bettinginput2" value = {Rgroup} onChange={onRgroupHandler}/>
            <div className="contents">Contents</div>
            <textarea type="text" id="bettinginput3" value = {Contents} onChange={onContentsHandler}></textarea>
            <Link to={{pathname :'./check', state : {rgroup: Rgroup,bet: Bet, contents : Contents, groupname : groupname, mileage : mileage}}}><button className="send">SEND</button> </Link>
            </header>     
        </div>
    );
    
}

export default Challenge;