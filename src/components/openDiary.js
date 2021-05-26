import React, {useState} from 'react';
import '../style/openDiary.css';
import ReactDOM, {render} from 'react-dom';
import jQuery from "jquery";
import {db, firebaseApp, firebase} from '../firebase';
import Menubar from './menu';

var getid = 1;
var currentid = 1;
var icon1_lst = [{loc: [500, 500], set: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], link: 'https://firebasestorage.googleapis.com/v0/b/upload-e73b6.appspot.com/o/images%2Fbadminton_1.jpg?alt=media&token=211ec7e3-1e6d-4d5e-91ed-4153eed7c3c2', text: 'blabla'} ];
function OpenDiary(props){
    var size = 1900;
    var zoom = window.innerWidth / size 
    document.body.style.zoom = zoom;
    const name= props.location.state.group;
    const id = props.match.params.id
    console.log(name,id);
    function read(){
        db.collection("Groups").doc(name).collection("Diary").doc(id).get()
        .then(function(doc){
            if (doc.exists){
                let check = doc.data().icon_input[0]
                console.log(check);
            }
        })
    }

        return(
            <div>
                <div class = "themediary">Diary</div>
                <div class = "diarybone">
                    <div class = "diarytitle" id = "diarytitle">Title</div>
                    <div class = "writtenin">Written in</div><div class = "diarydate" id = "diarydate"> 2021.05.26 </div>
                    <div class = "boneline"></div>
                    <button class = "load" onClick = {()=>read()}>load</button>
                    <div class = "getcomponents">
                        <div id = "component1"></div>
                        <div id = "10001"></div>
                        <div id = "10002"></div>
                        <div id = "10003"></div>
                        <div id = "10004"></div>
                        <div id = "10005"></div>
                        <div id = "10006"></div>
                        <div id = "10007"></div>
                        <div id = "10008"></div>
                        <div id = "10009"></div>
                        <div id = "10010"></div>
                        <div id = "10011"></div>
                        <div id = "10012"></div>
                        <div id = "10013"></div>
                        <div id = "10014"></div>
                        <div id = "10015"></div>
                        <div id = "10016"></div>
                        <div id = "10017"></div>
                        <div id = "10018"></div>
                        <div id = "10019"></div>
                        <div id = "10020"></div>
                        <div id = "10021"></div>
                        <div id = "10022"></div>
                        <div id = "10023"></div>
                        <div id = "10024"></div>
                        <div id = "10025"></div>
                        <div id = "10026"></div>
                        <div id = "10027"></div>
                        <div id = "10028"></div>
                        <div id = "10029"></div>
                        <div id = "10030"></div>
                        <div id = "10031"></div>
                        <div id = "10032"></div>
                        <div id = "10033"></div>
                        <div id = "10034"></div>
                        <div id = "10035"></div>
                        <div id = "10036"></div>
                        <div id = "10037"></div>
                        <div id = "10038"></div>
                        <div id = "10039"></div>
                    </div>
                </div>
                <Menubar group={props.location.state.group} user={props.location.state.user}/>
            </div>
        )
    }


function icon1(){
        
    const comp = (
        <div id = "stop" >
            
            <div class = "scoresheet" style = {{left: icon1_lst[0]["loc"][0], top: icon1_lst[0]["loc"][1]}}>
                <div class = "putimg" id = "putimg">
                    <img src = {icon1_lst[0]["link"]} alt = "firebase-image" class = "image1"/>
                </div>
                <table class = "set_comp" >
                    <tr>
                        <th class = "gamescore">Game score</th>
                    </tr>
                    <tr>
                        <td class = "setnum">set1</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td><td width = "8px;" text-align = "center;">:</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td>
                    </tr>
                    <tr>
                        <td class = "setnum">set2</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td><td>:</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td>
                    </tr>
                    <tr>
                        <td class = "setnum">set3</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td><td>:</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td>
                    </tr>
                    <tr>
                        <td class = "setnum">set4</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td><td>:</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td>
                    </tr>
                    <tr>
                        <td class = "setnum">set5</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td><td>:</td><td class = "num_comp">{icon1_lst[0]["set"][0]}</td>
                    </tr>
                </table>
                <div class = "analysis">
                    <div class = "analysis_text">{icon1_lst[0]["text"]}</div>
                </div>
            </div>
        </div>
    );
    
    ReactDOM.render(comp, document.getElementById('component1'));
    console.log(document.getElementById('stop').style.left)
}
function icon2(text, x, y){
    const comp = (
        <div class = "textboxes" style = {{left: x, top: y}}>{text}</div>
    )
    ReactDOM.render(comp, document.getElementById(currentid++));
}
function icon3(text, x, y){
    const comp = (
        <div class = "textboxes2" style = {{left: x, top: y}}>{text}</div>
    )
    ReactDOM.render(comp, document.getElementById(currentid++));
}
function icon4(text, x, y){
    const comp = (
        <div class = "textboxes3" style = {{left: x, top: y}}>{text}</div>
    )
    ReactDOM.render(comp, document.getElementById(currentid++));
}
function icon5(url, x, y){
    const comp = (
        <img src = {url} alt = "firebase-image" class = "imgonly" style = {{left: x, top: y}}/>
    )
    ReactDOM.render(comp, document.getElementById(currentid++));
}


export default OpenDiary;