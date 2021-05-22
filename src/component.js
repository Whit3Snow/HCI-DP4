import React from 'react';
import './component.css';

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

function component(){
    return(
        <body>
            
            <div class = "bar"></div>
            <input type = "text" class = "setTitle" placeholder = " Title"/>
            <input type = "text" class = "setTag"/>
            <button class = "Tag">Tag Register</button>
            <div class = "setCal"></div>
            <table class = "components">
                <tr>
                    <td>boo</td>
                </tr>
                <tr>
                    <td>boo</td>
                </tr>
            </table>
            <div class = "Paper"></div>
            
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

export default component;