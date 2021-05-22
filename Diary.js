import React from 'react';
import './Diary.css';
import imgTest from './badminton_1.jpg';
import {GoSearch} from "react-icons/go";

function Diary(){
        return(
            <div>
                
            <body>
                <h1 class = "theme">Diarys</h1>
                <div class = "bar"></div>
                <div class = "search"></div>
                <GoSearch  class = "mag"/>
                <input class = "tagsearch" id = "search" type = "text" autofocus onKeypress="javascript:if(event.keyCode==13) {run()}"/>
                <ul class="mylist">
                <li class = "diary">
                    <table id = "table" class="diarytable">
                    <tr><td class = "img"><img src={ imgTest} class = "set_img"/></td></tr>
                    <tr><td class = "date">2021.05.02</td></tr>
                    <tr><td class = "title">Min vs. Hyojin</td></tr>
                    <tr><td class = "tag">#single #B_Team</td></tr>
                    </table>
                </li>x
                <li class = "diary" id = "diary4">
                    <table id = "table" class="diarytable">
                    <tr><td class = "img"><img src={ imgTest} class = "set_img"/></td></tr>
                    <tr><td class = "date">2021.04.28</td></tr>
                    <tr><td class = "title">Dog vs. Cat</td></tr>
                    <tr><td class = "tag">#single #A_Team</td></tr>
                    </table>
                </li>
                <li class = "diary" id = "diary3">
                    <table id = "table" class="diarytable">
                    <tr><td class = "img"><img src={ imgTest} class = "set_img"/></td></tr>
                    <tr><td class = "date">2021.04.25</td></tr>
                    <tr><td class = "title">12th meeting</td></tr>
                    <tr><td class = "tag">#regular #meeting</td></tr>
                    </table>
                </li>
                <li class = "diary" id = "diary3">
                    <table id = "table" class="diarytable">
                    <tr><td class = "img"><img src={ imgTest} class = "set_img"/></td></tr>
                    <tr><td class = "date">2021.04.20</td></tr>
                    <tr><td class = "title">KAI vs. Chung</td></tr>
                    <tr><td class = "tag">#double #A_Team</td></tr>
                    </table>
                </li>
                <li class = "diary" id = "diary3">
                    <table id = "table" class="diarytable">
                    <tr><td class = "img"><img src={ imgTest} class = "set_img"/></td></tr>
                    <tr><td class = "date">2021.04.19</td></tr>
                    <tr><td class = "title">Practice for game</td></tr>
                    <tr><td class = "tag">#practice #Bothp</td></tr>
                    </table>
                </li>
                </ul>
            </body>
            </div>
        )

}

export default Diary;