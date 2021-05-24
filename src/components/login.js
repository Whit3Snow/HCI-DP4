import React, {useState} from 'react';
import '../style/logingroup.css';
import {Link, Route, BrowserRouter} from "react-router-dom";
import {db, firebaseApp, firebase} from '../firebase';
import man from '../man_run.png';
import woman from '../woman_run.png';

function Login (){
    var size = 1900;
    var zoom = window.innerWidth / size 

    document.body.style.zoom = zoom;

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState("");
    const [uid, setUid] = useState(null);
        
    const onEmailChange = (evt) => {
        setEmail(evt.target.value);
    }
        
    const onPwChange = (evt) => {
        setPw(evt.target.value);
    }
    const signin = ()=>{
        firebaseApp.auth().signInWithEmailAndPassword(email, pw)
        .then((user) => {
        const uid = (firebaseApp.auth().currentUser || {}).uid
        window.location.href ='/group/'+uid;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        setError(errorMessage);
        });
    }
    return(
        <div>
        <div id="back">
            <div id="workout">WORK OUT TOGETHER</div>
            <div class="box">
                <input id="id" type="text" onChange={onEmailChange} value={email}/>
            </div>
            <div class="box">
                <input id="pw" type="text" onChange={onPwChange} value={pw}/>
            </div>
            <div id ="signin" onClick ={signin} >Signin</div>
        </div>
        <img src={man} style={{position:'absolute', left:"20px" ,maxHeight:"900px"}}/>
        <img src={woman} style={{position:'absolute', left:"60px" ,maxHeight:"1000px"}}/>
        </div>
    );
}

export default Login;