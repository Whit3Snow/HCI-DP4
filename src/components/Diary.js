import React, { useEffect , useState} from 'react';
import '../style/Diary.css';
import imgTest from '../badminton_1.jpg';
import {GoSearch} from "react-icons/go";
import {db, firebaseApp, firebase} from '../firebase';
import { set } from 'lodash';
import search_icon from '../loupe.png';
import Menubar from './menu';

//아직 못한거 : 시간 설정, 인자 받아올 줄 몰라서 그룹마다 다르게 구현 안함 / 먹통된 파이어베이스만 잘 끌어오면 끝 / 
/*
1. 시간 어떻게 받아올까
2. 아무것도 없을 때 화면 구성하기
*/

var origin_diary = [
    {
        img : "",
        title:"A",
        tag:["firebase","trouble"]
    },
    {
        img: imgTest,
        title:"B",
        tag:["trouble"]
    },
    {
        img:imgTest,
        title:"C",
        tag:["Hate","firebase"]
    }
]
/*가끔 두번 되는 오류 있으므로 주의 */
var fil;
var diary = [];
//&을 기본으로 설정했다. 
///먼저 들어간 순으로 나온다. 
//const ref = db.collection("Groups").doc("HELLO BADMINTON").collection("Diary");

function Diary(props){
    
    var size = 1900;
    var zoom = window.innerWidth / size 
    document.body.style.zoom = zoom;
    fil = props.match.params.id; //filter 받아오는거
    const [load, setLoad] = useState(true);
    const [search, setSearch] = useState(fil=='&'? null:fil);
    const searching = (evt)=>{
        setSearch(evt.target.value)
    }
    
    if(diary.length==0){
        origin_diary.forEach((doc)=>{
            if(fil!='&') {
                if(doc.tag.filter(e=>fil.toLowerCase()==e.toLowerCase()).length==0) return;
            }
            diary.push(doc);
        })
    }
    if(diary.length==0) 
    return(
        <div>
        <body>
            <h1 class = "theme">Diarys</h1>
            <div class = "search">
                <input value = {search} class = "tagsearch" id = "search" type = "text" onChange = {searching} autofocus onKeyPress={e=>{if(e.key=='Enter') filter(search)}}/>
                <div onClick={()=>{filter(search)}} style={{margin:"10px"}}><img src= {search_icon} style={{maxHeight:"50px"}}/></div>
            </div>
            <GoSearch  class = "mag" style ={{maxWidth:'10px'}}/>
            <div id="nothing_search">No results were found for your search : {fil}</div>
        </body>
        <Menubar/>
        </div>
    ) 
    /*
    망할 파이어베이스 때문에 잠깐 먹통이 된 녀석
    useEffect(()=>{
        ref.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                if(fil!='&') {
                    if(typeof data["Tag"].find(fil)=="undefined") return;
                }
                diary.push({date:data["Date"].toDate(), title:data["Title"], tag:data["Tag"]})
                //date바꾸는 법만 알면 끝
            })  
            setLoad(true);
        })
    })*/
    if(!load) return(<div>Loading</div>);
    //console.log(diary);
        return(
            <div>
            <body>
                <h1 class = "theme">Diarys</h1>
                <div class = "search">
                    <input value = {search} class = "tagsearch" id = "search" type = "text" onChange = {searching} autofocus onKeyPress={e=>{if(e.key=='Enter') filter(search)}}/>
                    <div onClick={()=>{filter(search)}} style={{margin:"10px"}}><img src= {search_icon} style={{maxHeight:"50px"}}/></div>
                </div>
                <ul class="mylist">
                {
                    diary.map((info)=>{
                        
                    return(
                    <li class = "diary_d">
                        <table id = "table" class="diarytable_d">
                            <tr><td class = "img" onClick = {()=>{gotopost(info.title)}}><img src={info.img} alt="NO IMAGE" class = "set_img"/></td></tr>
                            <tr><td class = "date">2021.05.02</td></tr>
                            <tr><td class = "title" onClick = {()=>{gotopost(info.title)}}>{info.title}</td></tr>
                            <tr><td class = "tag">
                                {
                                    info.tag.map((t)=>{
                                        return(
                                            <span onClick={()=>{filter(t)}}>#{t}        </span>
                                        )
                                    })
                                }
                                </td></tr>
                        </table>
                    </li>)
                    
                    })
                }
                
                </ul>
            </body>
            <Menubar/>
            </div>
        )

};

function filter(fi){
    fi==null?fi='&':fi=fi;
    window.location.href = '/Diary/'+fi;
};
function gotopost(name){
    window.location.href = '/Posting/'+name;
}

export default Diary;