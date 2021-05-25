import React, {useState} from 'react';
import './component.css';
import ReactDOM, {render} from 'react-dom';
import jQuery from "jquery";
import {storage} from "./firebase";
import axios from 'axios';



window.$ = window.jQuery = jQuery;  

var isEmpty = 0;
var x;
var y;
var url1;
var html_2;

class Menu extends React.Component{
    render(){
        return(
            <div class="menu" id="menu">
                <div class = "menu_icon" onClick={()=>off()}>
                    <div class="icon"></div>
                    <div class="icon"></div>
                    <div class="icon"></div>
                </div>
                <div class = "list" >Main</div>
                <div class = "list">New Posting</div>
                <div class = "list">Diary</div>
                <div class = "list">Mileage</div>
                <div class = "list">Other Groups</div>
                <div class = "list">Logout</div>
            </div>
        )
    }
}

function on(){
    document.getElementById("menu").style.left = "0px";
}

function off(){
    document.getElementById("menu").style.left = "-400px";
}



function Component(){
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
            <input type = "text" class = "setTitle" placeholder = " Title"/>
            <input type = "text" class = "setTag"/>
            <div class = "upload">
                <input type="file" class = "file" onChange={handleChange}/>
                <progress value = {progress} max = "100" class = "progress"/>
                <button type="button" class = "upbutton" onClick={handleUpload}>Upload</button>
            </div>
            <button class = "Tag">Tag Register</button>
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
                <div id = "component1" class = "component1"></div>
                
                <table id = "component2" class = "component2"></table>
                <div class = "bone"></div>
            </div>
            
            
            <button class = "confirm">Confirm</button>

            <div>
                <div class = "menubar">
                    <div class = "menu_icon" onClick={()=>on()}>
                        <div class="icon"></div>
                        <div class="icon"></div>
                        <div class="icon"></div>
                    </div>
                </div>
                <Menu/>
            </div>
        </body>
    )
    
}

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

function icon1(){
    const comp = (
        <div id = "stop">
            <div class = "draggable" id = "draggable">C{"\n"}A{"\n"}T{"\n"}C{"\n"}H</div>
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

function icon2(){
    const comp = 
        '<div>'+
            '<div class = "a1"></div>'+
            '<textarea id = "textbox"></textarea>'+
        '</div>';

    

    const newcomp = <div dangerouslySetInnerHTML={ {__html: comp+html_2} }></div>
    ReactDOM.render(newcomp, document.getElementById('component1'));
}

function delete1(){
    const comp = (
        <div></div>
    )
    ReactDOM.render(comp, document.getElementById('component1'));
}


//---------------------------------------------drag on-----------------------------------------------------
//---------------------------------------------------------------------------------------------------------

let isDragging = false;

document.addEventListener('mousedown', function(event) {

  let dragElem = event.target.closest('.draggable');

  if (!dragElem) return;

  let dragElement = jQuery("#draggable").parents("div")[0]

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

    console.log(dragElement.id, x, y);

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


document.addEventListener('mousedown', function(event) {

  let dragElem = event.target.closest('.draggable2');

  if (!dragElem) return;

  let dragElement = jQuery("#draggable2").parents("div")[0]

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

    console.log(dragElement.id, x, y);

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