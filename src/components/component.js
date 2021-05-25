import React, {useState} from 'react';
import '../style/component.css';
import ReactDOM, {render} from 'react-dom';
import jQuery from "jquery";
import {storage, db, firebaseApp, firebase} from "../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar_img from "../calendar.png";
//mport axios from 'axios';
/*
변동내역
1. component 부분은 다수 바뀜
2. date_choice 부분은 아이콘으로 바꾸기
*/



window.$ = window.jQuery = jQuery;  


var count_id1 = 101; // firebase
var count_id2 = 201; // firebase
var count_id = 10001;
var isEmpty = 0;
var x;
var y;
var url1;

const tags = [];



function Component(){
        const name = "HELLO BADMINTON";
        // 노필요일수도?
        // 자료 정보 넘겨주기 위한 용도

        const [date, setDate] = useState(new Date());
        const [title, setTitle] = useState(""); //ok
        const [tag,setTag]=useState(""); //ok
        const [img, setImg] = useState([]); // 여기 통해서 이미지 정보들 넘겨줘요오오

        

         function confirm_func(){
            const ref = db.collection("Groups").doc(name).collection("Diary");
            ref.add({
                    "Date": date,
                    "Title":title,
                    "Tag":tags,
                    "Img": "" //어레이로 할껀데 일단 오류 방지를 위해 "" 해둔거임
 
            }).then(()=>{alert("success!!");})
            
        }

        console.log(title,date);
        function regtag(){
            tags.push(tag);
            setTag("");
            console.log(tags);
        }

        ///////
        const [image, setImage] = useState(null)
        const [url, setUrl] = useState("");
        
        const[progress, setProgress] = useState(0);
        const handleChange = e => {
            if (e.target.files[0]) {
                setImage(e.target.files[0]);
                }
        }

        const handleUpload = () => {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
              "state_changed",
              snapshot => {
                const progress = Math.round(
                  (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
                );
                setProgress(progress);
              },
              error => {
                console.log(error);
              },
              () => {
                storage
                  .ref("images")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                    setUrl(url);
                  });
                }
                
            )
            
            isEmpty++;
            
        };

        url1 = url;
        return(
        <body>
            <div class = "bar"></div>
            <input type = "text" class = "setTitle" placeholder = " Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <div id="date_choice"><img src={calendar_img} style={{height:"50px"}}/><DatePicker selected={date} onChange={date => setDate(date)} /></div>
            
            <div class = "upload">
                <input type="file" class = "file" onChange={handleChange}/>
                <progress value = {progress} max = "100" class = "progress"/>
                <button type="button" class = "upbutton" onClick={handleUpload}>Upload</button>
            </div>
            <input type = "text" class = "setTag" value={tag} onChange={(e)=>{setTag(e.target.value)}}   onKeyPress={e=>{if(e.key=='Enter') regtag()}}/>
            <button class = "Tag" onClick={regtag}>Tag Register</button>
            <div id="reged_tag">{tags.map((t)=><span>#{t} </span>)}</div>
            <div class = "setCal"></div>
            <table class = "components">
                <tr>
                    <td class = "icon" onClick = {() => icon1()}>1</td>
                </tr>
                <tr>
                    <td class = "icon" onClick = {() => icon2()}>2</td>
                </tr>
                <tr>
                    <td class = "icon" onClick = {() => icon1()}>3</td>
                </tr>
                <tr>
                    <td class = "icon" onClick = {() => icon1()}>4</td>
                </tr>
                <tr>
                    <td class = "icon" onClick = {() => icon1()}>5</td>
                </tr>
                <tr>
                    <td class = "icon" onClick = {() => icon1()}>6</td>
                </tr>
            </table>
            <div class = "Paper">
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
                <div class = "bone"></div>
            </div>
            <button class = "confirm" onClick={()=>{confirm_func()}}>Confirm</button>
        </body>
    )
    
}

//----------------------------------------------img upload-------------------------------------------------

function Uploading(){
    if(!isEmpty){
        alert("No Image Upload first");
    }
    else{
        const comp = (
            <img src = {url1} alt = "firebase-image" class = "image1"/>
            );
        ReactDOM.render(comp, document.getElementById('putimg'));
    }

}

//-----------------------------------------------icon1-----------------------------------------------------

function icon1(){
    const comp = (
        <div id = "stop">
            <div class = "draggable" id = {count_id1}>C{"\n"}A{"\n"}T{"\n"}C{"\n"}H</div>
            <div class = "delete1" id = "delete1" onClick = {()=>delete1()}>D E L E T E</div>
            <div class = "scoresheet">
                <div class = "putimg" id = "putimg">
                    <div class = "addimg" onClick = {()=>Uploading()} >+</div>
                    <table class = "uploadlist">
                        <tr><td>Empty</td></tr>
                    </table>
                </div>
                <table class = "set" >
                    <tr>
                        <th class = "gamescore">Game score</th>
                    </tr>
                    <tr>
                        <td class = "setnum">set1</td><td><input class = "num" type = "text"></input></td><td width = "8px;" text-align = "center;">:</td><td><input class = "num" type = "text"></input></td>
                    </tr>
                    <tr>
                        <td class = "setnum">set2</td><td><input class = "num" type = "text"></input></td><td>:</td><td><input class = "num" type = "text"></input></td>
                    </tr>
                    <tr>
                        <td class = "setnum">set3</td><td><input class = "num" type = "text"></input></td><td>:</td><td><input class = "num" type = "text"></input></td>
                    </tr>
                    <tr>
                        <td class = "setnum">set4</td><td><input class = "num" type = "text"></input></td><td>:</td><td><input class = "num" type = "text"></input></td>
                    </tr>
                    <tr>
                        <td class = "setnum">set5</td><td><input class = "num" type = "text"></input></td><td>:</td><td><input class = "num" type = "text"></input></td>
                    </tr>
                </table>
                <div class = "analysis">
                    <textarea class = "analysis_text"/>
                </div>
            </div>
        </div>
    );
    ReactDOM.render(comp, document.getElementById('component1'));
}


//---------------------------------------------------icon2----------------------------------------------------------

function delete2(obj){
    //const getid = obj.id;
    console.log(obj)
    //ReactDOM.render(<div></div>, document.getElementById(getid-100000));
}
function icon2(){
    const comp = (    
        <div class = "textcover">
            <div class = "draggable2" id = {count_id2} >D R A G</div>
            <div class = "delete2" id = {count_id+100000} onClick = {()=>delete2(this)}>X</div>
            <textarea class = "textboxes"></textarea>
        </div>
    );
    count_id2++;
    ReactDOM.render(comp, document.getElementById(count_id++));
}

function delete1(){
    const comp = (
        <div></div>
    )
    ReactDOM.render(comp, document.getElementById('component1'));
}


//---------------------------------------------drag on-----------------------------------------------------
//---------------------------------------------icon1-----------------------------------------------------

let isDragging = false;

document.addEventListener('mousedown', function(event) {

  let dragElem = event.target.closest('.draggable');

  if (!dragElem) return;

  const getid = dragElem.id;

  let dragElement = jQuery("#" + getid).parents("div")[0]

  event.preventDefault();

  dragElement.ondragstart = function() {
      return false;
  };

  let coords, shiftX, shiftY;

  startDrag(dragElement, event.clientX, event.clientY);

  function onMouseUp(event) {
    finishDrag();
  };

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  function startDrag(element, clientX, clientY) {
    
    if(isDragging) {
      return;
    }
    
    isDragging = true;

    document.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseup', onMouseUp);

    shiftX = clientX - element.getBoundingClientRect().left;
    shiftY = clientY - element.getBoundingClientRect().top;


    element.style.position = 'fixed';

    moveAt(clientX, clientY);
  };

  function finishDrag() {
    if(!isDragging) {
      return;
    }

    isDragging = false;

    dragElement.style.top = parseInt(dragElement.style.top) + window.pageYOffset + 'px';
    dragElement.style.position = 'absolute';
    
    x = dragElement.style.left;
    y = dragElement.style.top;

    console.log(getid, x, y);

    document.removeEventListener('mousemove', onMouseMove);
    dragElement.removeEventListener('mouseup', onMouseUp);
  }

  function moveAt(clientX, clientY) {
      
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;

    let newBottom = newY + dragElement.offsetHeight;

    if (newBottom > document.documentElement.clientHeight) {

      let docBottom = document.documentElement.getBoundingClientRect().bottom;


      let scrollY = Math.min(docBottom - newBottom, 10);

      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, scrollY);

      newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
    }

    if (newY < 0) {

      let scrollY = Math.min(-newY, 10);
      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, -scrollY);

    }

    if (newX < 0) newX = 0;
    if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
      newX = document.documentElement.clientWidth - dragElement.offsetWidth;
    }

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
    
  }

});

export default Component;


//---------------------------------------------------------------icon2------------------------------------------------------------------------

document.addEventListener('mousedown', function(event) {

  let dragElem = event.target.closest('.draggable2');

  if (!dragElem) return;

  const getid = dragElem.id;

  let dragElement = jQuery("#" + getid).parents("div")[0]

  event.preventDefault();

  dragElement.ondragstart = function() {
      return false;
  };

  let coords, shiftX, shiftY;

  startDrag(dragElement, event.clientX, event.clientY);

  function onMouseUp(event) {
    finishDrag();
  };

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  function startDrag(element, clientX, clientY) {
    
    if(isDragging) {
      return;
    }
    
    isDragging = true;

    document.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseup', onMouseUp);

    shiftX = clientX - element.getBoundingClientRect().left;
    shiftY = clientY - element.getBoundingClientRect().top;


    element.style.position = 'fixed';

    moveAt(clientX, clientY);
  };

  function finishDrag() {
    if(!isDragging) {
      return;
    }

    isDragging = false;

    dragElement.style.top = parseInt(dragElement.style.top) + window.pageYOffset + 'px';
    dragElement.style.position = 'absolute';
    
    x = dragElement.style.left;
    y = dragElement.style.top;

    console.log(getid, x, y);

    document.removeEventListener('mousemove', onMouseMove);
    dragElement.removeEventListener('mouseup', onMouseUp);
  }

  function moveAt(clientX, clientY) {
      
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;

    let newBottom = newY + dragElement.offsetHeight;

    if (newBottom > document.documentElement.clientHeight) {

      let docBottom = document.documentElement.getBoundingClientRect().bottom;


      let scrollY = Math.min(docBottom - newBottom, 10);

      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, scrollY);

      newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
    }

    if (newY < 0) {

      let scrollY = Math.min(-newY, 10);
      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, -scrollY);

    }

    if (newX < 0) newX = 0;
    if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
      newX = document.documentElement.clientWidth - dragElement.offsetWidth;
    }

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';
    
  }

});