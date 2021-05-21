import React, {useState} from 'react';
import '../style/logingroup.css';
import {Link, Route, BrowserRouter} from "react-router-dom";
import {db, firebaseApp, firebase} from '../firebase';

function Login (){
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
    
        console.log(user);
        const uid = (firebaseApp.auth().currentUser || {}).uid
        console.log(uid); 
        alert('signin!!');
        window.location.href ='/group/'+uid;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        });
    }
    return(
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
    );
}

export default Login;