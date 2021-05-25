import React from 'react';
import '../style/main.css';
import imgTree from '../tree.png';
import imgTest from '../badminton_1.jpg';
import imgTitle from '../title.png';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';



function on(){
    document.getElementById("menu").style.left = "0px";
}

function off(){
    document.getElementById("menu").style.left = "-400px";
}


function Main(props){

        class Menu extends React.Component{
            render(){
                return(
                    <div class="menu" id="menu">
                        <div class = "menu_icon" onClick={()=>off()}>
                            <div class="icon"></div>
                            <div class="icon"></div>
                            <div class="icon"></div>
                        </div>
                        {/* <div class = "list" >Main</div>
                        <div class = "list">New Posting</div>
                        <div class = "list">Diary</div>
                        <div class = "list" >Mileage</div>
                        <div class = "list">Other Groups</div>
                        <div class = "list">Logout</div> */}
                        <Link to= './main'><button class ="list">Main</button></Link>
                        <Link to= './mileage'><button class ="list">New Posting</button></Link>
                        <Link to= './Diary'><button class ="list">Diary</button></Link>
                        <Link to={{pathname :'./mileage', state : {group: props.location.state.group, user:props.location.state.user}}}><button class ="list">Mileage</button></Link>
                        <Link to= './group'><button class ="list">Other Groups</button></Link>
                        <Link to= './mileage'><button class ="list">Logout</button></Link>
                    </div>
                )
            }
        }


        return(
            <div>

            <body class = "all">
                <img src={ imgTitle} />
                <h1 class = "title_1">Welcome to</h1><h1 class = "title_2">Hello Badminton!</h1>
                <div class = "logout">logout</div>
                <div class = "group">group</div>
                <table class = "toTree">
                    <thead>
                    <tr>
                        <td class = "content_title">
                            Our Tree
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td class = "mileage_jun">
                        16200
                    </td></tr>
                    <tr><td class = "tree">
                        <img src={ imgTree} class = "tree_img"/>
                    </td></tr>
                    </tbody>
                </table>
                <table class = "toMessage">
                    <thead>
                    <tr><td class = "content_title">
                    Message
                    </td></tr>
                    </thead>
                    <tbody>
                    <tr><td class = "message_jun">
                    Challenge message from...
                    </td></tr>
                    <tr><td class = "message_jun">
                    Challenge message from...
                    </td></tr>
                    <tr><td class = "message_jun">
                    Complete message from...
                    </td></tr>
                    <tr><td class = "message_jun">
                    Challenge message from...
                    </td></tr>
                    </tbody>
                </table>
                <div class = "diary">
                <Link to="./diary" class = "hover"> 
                <table class = "diary_1">
                    <thead>
                    <tr>
                    <td height = "180px">
                        <img src={ imgTest} class = "diary_img" />
                    </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td class = "diary_text">
                        Min vs. Hyojin
                    </td>
                    </tr>
                    <tr>
                    <td class = "diary_date">
                        5th Diary, 2021.05.02..
                    </td>
                    </tr>
                    </tbody>
                </table>
                </Link>
                <Link to="./diary" class = "hover"> 
                <table class = "diary_2">
                    <thead>
                    <tr>
                    <td height = "180px">
                        <img src={ imgTest} class = "diary_img"/>
                    </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td class = "diary_text">
                        Dog vs. Cat
                    </td>
                    </tr>
                    <tr>
                    <td class = "diary_date">
                        4th Diary, 2021.04.28..
                    </td>
                    </tr>
                    </tbody>
                </table>
                </Link> 
                <Link to="./diary" class = "hover"> 
                <table class = "diary_3">
                    <thead>
                    <tr>
                    <td height = "180px">
                        <img src={ imgTest} class = "diary_img"/>
                    </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td class = "diary_text">
                        12th meeting
                    </td>
                    </tr>
                    <tr>
                    <td class = "diary_date">
                        3th Diary, 2021.04.25..
                    </td>
                    </tr>
                    </tbody>
                </table>
                </Link> 
                </div>
                <div class = "calendar">
                    <div class = "year">2021</div>
                    <div id = "changeMonth">
                        <div id = "months" class = "months">
                            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
                            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
                            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
                            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
                            <span class="month-color" onClick = {()=>May()}>May{" "}</span>
                            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
                            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
                            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
                            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
                            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
                            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
                            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
                        </div>
                    </div>
                    <hr class="month-line"/>
                    <div id = "tables">
                    <table id = "table" class="table_jun">
                        <thead>
                            <tr class = "week" height = "30px" >
                                <th class = "Day">SUN</th>
                                <th class = "Day">MON</th>
                                <th class = "Day">TUE</th>
                                <th class = "Day">WED</th> 
                                <th class = "Day">THU</th> 
                                <th class = "Day">FRI</th>
                                <th class = "Day">SAT</th> 
                            </tr>
                        </thead>
                         <tbody>
                            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                                <td class = "notday" id = "1-1" width = "100px">25</td>
                                <td class = "notday" id = "1-2" width = "100px">26</td>
                                <td class = "notday" id = "1-3" width = "100px">27</td>
                                <td class = "notday" id = "1-4" width = "100px">28</td> 
                                <td class = "notday" id = "1-5" width = "100px">29</td> 
                                <td class = "notday" id = "1-6" width = "100px">30</td>
                                <td class = "day" id = "1-7" width = "100px">1</td> 
                            </tr>
                            <tr class = "week" height = "77px">
                                <td class = "setday" id = "2-1"><div>2</div><div>#single{"\n"}#Team A</div></td>
                                <td class = "day" id = "2-2">3</td>
                                <td class = "day" id = "2-3">4</td>
                                <td class = "day" id = "2-4">5</td>
                                <td class = "day" id = "2-5">6</td>
                                <td class = "day" id = "2-6">7</td>
                                <td class = "day" id = "2-7">8</td>
                            </tr>
                            <tr class = "week" height = "77px">
                                <td class = "day" id = "3-1">9</td>
                                <td class = "day" id = "3-2">10</td>
                                <td class = "day" id = "3-3">11</td>
                                <td class = "day" id = "3-4">12</td> 
                                <td class = "day" id = "3-5">13</td> 
                                <td class = "day" id = "3-6">14</td>
                                <td class = "day" id = "3-7">15</td> 
                            </tr>
                            <tr class = "week" height = "77px">
                                <td class = "day" id = "4-1">16</td>
                                <td class = "day" id = "4-2">17</td>
                                <td class = "day" id = "4-3">18</td>
                                <td class = "day" id = "4-4">19</td> 
                                <td class = "day" id = "4-5">20</td> 
                                <td class = "day" id = "4-6">21</td>
                                <td class = "day" id = "4-7">22</td> 
                            </tr>
                            <tr class = "week" height = "77px">
                                <td class = "day" id = "5-1">23</td>
                                <td class = "day" id = "5-2">24</td>
                                <td class = "day" id = "5-3">25</td>
                                <td class = "day" id = "5-4">26</td> 
                                <td class = "day" id = "5-5">27</td> 
                                <td class = "day" id = "5-6">28</td>
                                <td class = "day" id = "5-7">29</td> 
                            </tr>
                            <tr class = "week" height = "77px">
                                <td class = "day" id = "6-1">30</td>
                                <td class = "day" id = "6-2">31</td>
                                <td class = "notday" id = "6-3">1</td>
                                <td class = "notday" id = "6-4">2</td> 
                                <td class = "notday" id = "6-5">3</td> 
                                <td class = "notday" id = "6-6">4</td>
                                <td class = "notday" id = "6-7">5</td> 
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="calendar-left">
                        <div class="D-date">15</div>
                        <div class="D-day">SATURDAY</div>
                        <div class="today-schedule">Today's schedule
                        <br/>
                        <ul>
                            <li>Nothing</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </body>
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
            </div>
            
        )
    
}

function Jan(){
    const element = (
        <table id = "table" class="table_jun">
            <thead>
                <tr class = "week" height = "30px" >
                    <th class = "Day">SUN</th>
                    <th class = "Day">MON</th>
                    <th class = "Day">TUE</th>
                    <th class = "Day">WED</th> 
                    <th class = "Day">THU</th> 
                    <th class = "Day">FRI</th>
                    <th class = "Day">SAT</th> 
                </tr>
            </thead>
            <tbody>
                <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                    <td class = "notday" id = "1-1" width = "100px">27</td>
                    <td class = "notday" id = "1-2" width = "100px">28</td>
                    <td class = "notday" id = "1-3" width = "100px">29</td>
                    <td class = "notday" id = "1-4" width = "100px">30</td> 
                    <td class = "notday" id = "1-5" width = "100px">31</td> 
                    <td class = "day" id = "1-6" width = "100px">1</td>
                    <td class = "day" id = "1-7" width = "100px">2</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "2-1">3</td>
                    <td class = "day" id = "2-2">4</td>
                    <td class = "day" id = "2-3">5</td>
                    <td class = "day" id = "2-4">6</td>
                    <td class = "day" id = "2-5">7</td>
                    <td class = "day" id = "2-6">8</td>
                    <td class = "day" id = "2-7">9</td>
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "3-1">10</td>
                    <td class = "day" id = "3-2">11</td>
                    <td class = "day" id = "3-3">12</td>
                    <td class = "day" id = "3-4">13</td> 
                    <td class = "day" id = "3-5">14</td> 
                    <td class = "day" id = "3-6">15</td>
                    <td class = "day" id = "3-7">16</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "4-1">17</td>
                    <td class = "day" id = "4-2">18</td>
                    <td class = "day" id = "4-3">19</td>
                    <td class = "day" id = "4-4">20</td> 
                    <td class = "day" id = "4-5">21</td> 
                    <td class = "day" id = "4-6">22</td>
                    <td class = "day" id = "4-7">23</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "5-1">24</td>
                    <td class = "day" id = "5-2">25</td>
                    <td class = "day" id = "5-3">26</td>
                    <td class = "day" id = "5-4">27</td> 
                    <td class = "day" id = "5-5">28</td> 
                    <td class = "day" id = "5-6">29</td>
                    <td class = "day" id = "5-7">30</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "6-1">31</td>
                    <td class = "notday" id = "6-2">1</td>
                    <td class = "notday" id = "6-3">2</td>
                    <td class = "notday" id = "6-4">3</td> 
                    <td class = "notday" id = "6-5">4</td> 
                    <td class = "notday" id = "6-6">5</td>
                    <td class = "notday" id = "6-7">6</td> 
                </tr>
            </tbody>
        </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-color" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Feb(){
    const element = (
        <table id = "table" class="table_jun">
            <thead>
                <tr class = "week" height = "30px" >
                    <th class = "Day">SUN</th>
                    <th class = "Day">MON</th>
                    <th class = "Day">TUE</th>
                    <th class = "Day">WED</th> 
                    <th class = "Day">THU</th> 
                    <th class = "Day">FRI</th>
                    <th class = "Day">SAT</th> 
                </tr>
            </thead>
            <tbody>
                <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                    <td class = "notday" id = "1-1" width = "100px">31</td>
                    <td class = "day" id = "1-2" width = "100px">1</td>
                    <td class = "day" id = "1-3" width = "100px">2</td>
                    <td class = "day" id = "1-4" width = "100px">3</td> 
                    <td class = "day" id = "1-5" width = "100px">4</td> 
                    <td class = "day" id = "1-6" width = "100px">5</td>
                    <td class = "day" id = "1-7" width = "100px">6</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "2-1">7</td>
                    <td class = "day" id = "2-2">8</td>
                    <td class = "day" id = "2-3">9</td>
                    <td class = "day" id = "2-4">10</td>
                    <td class = "day" id = "2-5">11</td>
                    <td class = "day" id = "2-6">12</td>
                    <td class = "day" id = "2-7">13</td>
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "3-1">14</td>
                    <td class = "day" id = "3-2">15</td>
                    <td class = "day" id = "3-3">16</td>
                    <td class = "day" id = "3-4">17</td> 
                    <td class = "day" id = "3-5">18</td> 
                    <td class = "day" id = "3-6">19</td>
                    <td class = "day" id = "3-7">20</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "4-1">21</td>
                    <td class = "day" id = "4-2">22</td>
                    <td class = "day" id = "4-3">23</td>
                    <td class = "day" id = "4-4">24</td> 
                    <td class = "day" id = "4-5">25</td> 
                    <td class = "day" id = "4-6">26</td>
                    <td class = "day" id = "4-7">27</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "5-1">28</td>
                    <td class = "notday" id = "5-2">1</td>
                    <td class = "notday" id = "5-3">2</td>
                    <td class = "notday" id = "5-4">3</td> 
                    <td class = "notday" id = "5-5">4</td> 
                    <td class = "notday" id = "5-6">5</td>
                    <td class = "notday" id = "5-7">6</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "notday" id = "6-1">7</td>
                    <td class = "notday" id = "6-2">8</td>
                    <td class = "notday" id = "6-3">9</td>
                    <td class = "notday" id = "6-4">10</td> 
                    <td class = "notday" id = "6-5">11</td> 
                    <td class = "notday" id = "6-6">12</td>
                    <td class = "notday" id = "6-7">13</td> 
                </tr>
            </tbody>
        </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-color" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Mar(){
    const element = (
        <table id = "table" class="table_jun">
            <thead>
                <tr class = "week" height = "30px" >
                    <th class = "Day">SUN</th>
                    <th class = "Day">MON</th>
                    <th class = "Day">TUE</th>
                    <th class = "Day">WED</th> 
                    <th class = "Day">THU</th> 
                    <th class = "Day">FRI</th>
                    <th class = "Day">SAT</th> 
                </tr>
            </thead>
            <tbody>
                <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                    <td class = "notday" id = "1-1" width = "100px">28</td>
                    <td class = "day" id = "1-2" width = "100px">1</td>
                    <td class = "day" id = "1-3" width = "100px">2</td>
                    <td class = "day" id = "1-4" width = "100px">3</td> 
                    <td class = "day" id = "1-5" width = "100px">4</td> 
                    <td class = "day" id = "1-6" width = "100px">5</td>
                    <td class = "day" id = "1-7" width = "100px">6</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "2-1">7</td>
                    <td class = "day" id = "2-2">8</td>
                    <td class = "day" id = "2-3">9</td>
                    <td class = "day" id = "2-4">10</td>
                    <td class = "day" id = "2-5">11</td>
                    <td class = "day" id = "2-6">12</td>
                    <td class = "day" id = "2-7">13</td>
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "3-1">14</td>
                    <td class = "day" id = "3-2">15</td>
                    <td class = "day" id = "3-3">16</td>
                    <td class = "day" id = "3-4">17</td> 
                    <td class = "day" id = "3-5">18</td> 
                    <td class = "day" id = "3-6">19</td>
                    <td class = "day" id = "3-7">20</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "4-1">21</td>
                    <td class = "day" id = "4-2">22</td>
                    <td class = "day" id = "4-3">23</td>
                    <td class = "day" id = "4-4">24</td> 
                    <td class = "day" id = "4-5">25</td> 
                    <td class = "day" id = "4-6">26</td>
                    <td class = "day" id = "4-7">27</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "5-1">28</td>
                    <td class = "day" id = "5-2">29</td>
                    <td class = "day" id = "5-3">30</td>
                    <td class = "day" id = "5-4">31</td> 
                    <td class = "notday" id = "5-5">1</td> 
                    <td class = "notday" id = "5-6">2</td>
                    <td class = "notday" id = "5-7">3</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "notday" id = "6-1">4</td>
                    <td class = "notday" id = "6-2">5</td>
                    <td class = "notday" id = "6-3">6</td>
                    <td class = "notday" id = "6-4">7</td> 
                    <td class = "notday" id = "6-5">8</td> 
                    <td class = "notday" id = "6-6">9</td>
                    <td class = "notday" id = "6-7">10</td> 
                </tr>
            </tbody>
        </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-color" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Apr(){
    const element = (
        <table id = "table" class="table_jun">
            <thead>
                <tr class = "week" height = "30px" >
                    <th class = "Day">SUN</th>
                    <th class = "Day">MON</th>
                    <th class = "Day">TUE</th>
                    <th class = "Day">WED</th> 
                    <th class = "Day">THU</th> 
                    <th class = "Day">FRI</th>
                    <th class = "Day">SAT</th> 
                </tr>
            </thead>
            <tbody>
                <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                    <td class = "notday" id = "1-1" width = "100px">28</td>
                    <td class = "notday" id = "1-2" width = "100px">29</td>
                    <td class = "notday" id = "1-3" width = "100px">30</td>
                    <td class = "notday" id = "1-4" width = "100px">31</td> 
                    <td class = "day" id = "1-5" width = "100px">1</td> 
                    <td class = "day" id = "1-6" width = "100px">2</td>
                    <td class = "day" id = "1-7" width = "100px">3</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "2-1">4</td>
                    <td class = "day" id = "2-2">5</td>
                    <td class = "day" id = "2-3">6</td>
                    <td class = "day" id = "2-4">7</td>
                    <td class = "day" id = "2-5">8</td>
                    <td class = "day" id = "2-6">9</td>
                    <td class = "day" id = "2-7">10</td>
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "3-1">11</td>
                    <td class = "day" id = "3-2">12</td>
                    <td class = "day" id = "3-3">13</td>
                    <td class = "day" id = "3-4">14</td> 
                    <td class = "day" id = "3-5">15</td> 
                    <td class = "day" id = "3-6">16</td>
                    <td class = "day" id = "3-7">17</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "4-1">18</td>
                    <td class = "day" id = "4-2">19</td>
                    <td class = "day" id = "4-3">20</td>
                    <td class = "day" id = "4-4">21</td> 
                    <td class = "day" id = "4-5">22</td> 
                    <td class = "day" id = "4-6">23</td>
                    <td class = "day" id = "4-7">24</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "day" id = "5-1">25</td>
                    <td class = "day" id = "5-2">26</td>
                    <td class = "day" id = "5-3">27</td>
                    <td class = "day" id = "5-4">28</td> 
                    <td class = "day" id = "5-5">29</td> 
                    <td class = "day" id = "5-6">30</td>
                    <td class = "notday" id = "5-7">1</td> 
                </tr>
                <tr class = "week" height = "77px">
                    <td class = "notday" id = "6-1">2</td>
                    <td class = "notday" id = "6-2">3</td>
                    <td class = "notday" id = "6-3">4</td>
                    <td class = "notday" id = "6-4">5</td> 
                    <td class = "notday" id = "6-5">6</td> 
                    <td class = "notday" id = "6-6">7</td>
                    <td class = "notday" id = "6-7">8</td> 
                </tr>
            </tbody>
        </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-color" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function May(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "notday" id = "1-1" width = "100px">25</td>
                <td class = "notday" id = "1-2" width = "100px">26</td>
                <td class = "notday" id = "1-3" width = "100px">27</td>
                <td class = "notday" id = "1-4" width = "100px">28</td> 
                <td class = "notday" id = "1-5" width = "100px">29</td> 
                <td class = "notday" id = "1-6" width = "100px">30</td>
                <td class = "day" id = "1-7" width = "100px">1</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "setday" id = "2-1"><div>2</div><div>#single{"\n"}#Team A</div></td>
                <td class = "day" id = "2-2">3</td>
                <td class = "day" id = "2-3">4</td>
                <td class = "day" id = "2-4">5</td>
                <td class = "day" id = "2-5">6</td>
                <td class = "day" id = "2-6">7</td>
                <td class = "day" id = "2-7">8</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">9</td>
                <td class = "day" id = "3-2">10</td>
                <td class = "day" id = "3-3">11</td>
                <td class = "day" id = "3-4">12</td> 
                <td class = "day" id = "3-5">13</td> 
                <td class = "day" id = "3-6">14</td>
                <td class = "day" id = "3-7">15</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">16</td>
                <td class = "day" id = "4-2">17</td>
                <td class = "day" id = "4-3">18</td>
                <td class = "day" id = "4-4">19</td> 
                <td class = "day" id = "4-5">20</td> 
                <td class = "day" id = "4-6">21</td>
                <td class = "day" id = "4-7">22</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">23</td>
                <td class = "day" id = "5-2">24</td>
                <td class = "day" id = "5-3">25</td>
                <td class = "day" id = "5-4">26</td> 
                <td class = "day" id = "5-5">27</td> 
                <td class = "day" id = "5-6">28</td>
                <td class = "day" id = "5-7">29</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "6-1">30</td>
                <td class = "day" id = "6-2">31</td>
                <td class = "notday" id = "6-3">1</td>
                <td class = "notday" id = "6-4">2</td> 
                <td class = "notday" id = "6-5">3</td> 
                <td class = "notday" id = "6-6">4</td>
                <td class = "notday" id = "6-7">5</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-color" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Jun(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "notday" id = "1-1" width = "100px">30</td>
                <td class = "notday" id = "1-2" width = "100px">31</td>
                <td class = "day" id = "1-3" width = "100px">1</td>
                <td class = "day" id = "1-4" width = "100px">2</td> 
                <td class = "day" id = "1-5" width = "100px">3</td> 
                <td class = "day" id = "1-6" width = "100px">4</td>
                <td class = "day" id = "1-7" width = "100px">5</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "2-1">6</td>
                <td class = "day" id = "2-2">7</td>
                <td class = "day" id = "2-3">8</td>
                <td class = "day" id = "2-4">9</td>
                <td class = "day" id = "2-5">10</td>
                <td class = "day" id = "2-6">11</td>
                <td class = "day" id = "2-7">12</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">13</td>
                <td class = "day" id = "3-2">14</td>
                <td class = "day" id = "3-3">15</td>
                <td class = "day" id = "3-4">16</td> 
                <td class = "day" id = "3-5">17</td> 
                <td class = "day" id = "3-6">18</td>
                <td class = "day" id = "3-7">19</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">20</td>
                <td class = "day" id = "4-2">21</td>
                <td class = "day" id = "4-3">22</td>
                <td class = "day" id = "4-4">23</td> 
                <td class = "day" id = "4-5">24</td> 
                <td class = "day" id = "4-6">25</td>
                <td class = "day" id = "4-7">26</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">27</td>
                <td class = "day" id = "5-2">28</td>
                <td class = "day" id = "5-3">29</td>
                <td class = "day" id = "5-4">30</td> 
                <td class = "notday" id = "5-5">1</td> 
                <td class = "notday" id = "5-6">2</td>
                <td class = "notday" id = "5-7">3</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "notday" id = "6-1">4</td>
                <td class = "notday" id = "6-2">5</td>
                <td class = "notday" id = "6-3">6</td>
                <td class = "notday" id = "6-4">7</td> 
                <td class = "notday" id = "6-5">8</td> 
                <td class = "notday" id = "6-6">9</td>
                <td class = "notday" id = "6-7">10</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-color" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Jul(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "notday" id = "1-1" width = "100px">27</td>
                <td class = "notday" id = "1-2" width = "100px">28</td>
                <td class = "notday" id = "1-3" width = "100px">29</td>
                <td class = "notday" id = "1-4" width = "100px">30</td> 
                <td class = "day" id = "1-5" width = "100px">1</td> 
                <td class = "day" id = "1-6" width = "100px">2</td>
                <td class = "day" id = "1-7" width = "100px">3</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "2-1">4</td>
                <td class = "day" id = "2-2">5</td>
                <td class = "day" id = "2-3">6</td>
                <td class = "day" id = "2-4">7</td>
                <td class = "day" id = "2-5">8</td>
                <td class = "day" id = "2-6">9</td>
                <td class = "day" id = "2-7">10</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">11</td>
                <td class = "day" id = "3-2">12</td>
                <td class = "day" id = "3-3">13</td>
                <td class = "day" id = "3-4">14</td> 
                <td class = "day" id = "3-5">15</td> 
                <td class = "day" id = "3-6">16</td>
                <td class = "day" id = "3-7">17</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">18</td>
                <td class = "day" id = "4-2">19</td>
                <td class = "day" id = "4-3">20</td>
                <td class = "day" id = "4-4">21</td> 
                <td class = "day" id = "4-5">22</td> 
                <td class = "day" id = "4-6">23</td>
                <td class = "day" id = "4-7">24</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">25</td>
                <td class = "day" id = "5-2">26</td>
                <td class = "day" id = "5-3">27</td>
                <td class = "day" id = "5-4">28</td> 
                <td class = "day" id = "5-5">29</td> 
                <td class = "day" id = "5-6">30</td>
                <td class = "day" id = "5-7">31</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "notday" id = "6-1">1</td>
                <td class = "notday" id = "6-2">2</td>
                <td class = "notday" id = "6-3">3</td>
                <td class = "notday" id = "6-4">4</td> 
                <td class = "notday" id = "6-5">5</td> 
                <td class = "notday" id = "6-6">6</td>
                <td class = "notday" id = "6-7">7</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-color" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Aug(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "day" id = "1-1" width = "100px">1</td>
                <td class = "day" id = "1-2" width = "100px">2</td>
                <td class = "day" id = "1-3" width = "100px">3</td>
                <td class = "day" id = "1-4" width = "100px">4</td> 
                <td class = "day" id = "1-5" width = "100px">5</td> 
                <td class = "day" id = "1-6" width = "100px">6</td>
                <td class = "day" id = "1-7" width = "100px">7</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "2-1">8</td>
                <td class = "day" id = "2-2">9</td>
                <td class = "day" id = "2-3">10</td>
                <td class = "day" id = "2-4">11</td>
                <td class = "day" id = "2-5">12</td>
                <td class = "day" id = "2-6">13</td>
                <td class = "day" id = "2-7">14</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">15</td>
                <td class = "day" id = "3-2">16</td>
                <td class = "day" id = "3-3">17</td>
                <td class = "day" id = "3-4">18</td> 
                <td class = "day" id = "3-5">19</td> 
                <td class = "day" id = "3-6">20</td>
                <td class = "day" id = "3-7">21</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">22</td>
                <td class = "day" id = "4-2">23</td>
                <td class = "day" id = "4-3">24</td>
                <td class = "day" id = "4-4">25</td> 
                <td class = "day" id = "4-5">26</td> 
                <td class = "day" id = "4-6">27</td>
                <td class = "day" id = "4-7">28</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">29</td>
                <td class = "day" id = "5-2">30</td>
                <td class = "day" id = "5-3">31</td>
                <td class = "notday" id = "5-4">1</td> 
                <td class = "notday" id = "5-5">2</td> 
                <td class = "notday" id = "5-6">3</td>
                <td class = "notday" id = "5-7">4</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "notday" id = "6-1">5</td>
                <td class = "notday" id = "6-2">6</td>
                <td class = "notday" id = "6-3">7</td>
                <td class = "notday" id = "6-4">8</td> 
                <td class = "notday" id = "6-5">9</td> 
                <td class = "notday" id = "6-6">10</td>
                <td class = "notday" id = "6-7">11</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-color" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Sep(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "notday" id = "1-1" width = "100px">29</td>
                <td class = "notday" id = "1-2" width = "100px">30</td>
                <td class = "notday" id = "1-3" width = "100px">31</td>
                <td class = "day" id = "1-4" width = "100px">1</td> 
                <td class = "day" id = "1-5" width = "100px">2</td> 
                <td class = "day" id = "1-6" width = "100px">3</td>
                <td class = "day" id = "1-7" width = "100px">4</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "2-1">5</td>
                <td class = "day" id = "2-2">6</td>
                <td class = "day" id = "2-3">7</td>
                <td class = "day" id = "2-4">8</td>
                <td class = "day" id = "2-5">9</td>
                <td class = "day" id = "2-6">10</td>
                <td class = "day" id = "2-7">11</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">12</td>
                <td class = "day" id = "3-2">13</td>
                <td class = "day" id = "3-3">14</td>
                <td class = "day" id = "3-4">15</td> 
                <td class = "day" id = "3-5">16</td> 
                <td class = "day" id = "3-6">17</td>
                <td class = "day" id = "3-7">18</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">19</td>
                <td class = "day" id = "4-2">20</td>
                <td class = "day" id = "4-3">21</td>
                <td class = "day" id = "4-4">22</td> 
                <td class = "day" id = "4-5">23</td> 
                <td class = "day" id = "4-6">24</td>
                <td class = "day" id = "4-7">25</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">26</td>
                <td class = "day" id = "5-2">27</td>
                <td class = "day" id = "5-3">28</td>
                <td class = "day" id = "5-4">29</td> 
                <td class = "day" id = "5-5">30</td> 
                <td class = "notday" id = "5-6">1</td>
                <td class = "notday" id = "5-7">2</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "notday" id = "6-1">3</td>
                <td class = "notday" id = "6-2">4</td>
                <td class = "notday" id = "6-3">5</td>
                <td class = "notday" id = "6-4">6</td> 
                <td class = "notday" id = "6-5">7</td> 
                <td class = "notday" id = "6-6">8</td>
                <td class = "notday" id = "6-7">9</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-color" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Oct(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "notday" id = "1-1" width = "100px">26</td>
                <td class = "notday" id = "1-2" width = "100px">27</td>
                <td class = "notday" id = "1-3" width = "100px">28</td>
                <td class = "notday" id = "1-4" width = "100px">29</td> 
                <td class = "notday" id = "1-5" width = "100px">30</td> 
                <td class = "day" id = "1-6" width = "100px">1</td>
                <td class = "day" id = "1-7" width = "100px">2</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "2-1">3</td>
                <td class = "day" id = "2-2">4</td>
                <td class = "day" id = "2-3">5</td>
                <td class = "day" id = "2-4">6</td>
                <td class = "day" id = "2-5">7</td>
                <td class = "day" id = "2-6">8</td>
                <td class = "day" id = "2-7">9</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">10</td>
                <td class = "day" id = "3-2">11</td>
                <td class = "day" id = "3-3">12</td>
                <td class = "day" id = "3-4">13</td> 
                <td class = "day" id = "3-5">14</td> 
                <td class = "day" id = "3-6">15</td>
                <td class = "day" id = "3-7">16</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">17</td>
                <td class = "day" id = "4-2">18</td>
                <td class = "day" id = "4-3">19</td>
                <td class = "day" id = "4-4">20</td> 
                <td class = "day" id = "4-5">21</td> 
                <td class = "day" id = "4-6">22</td>
                <td class = "day" id = "4-7">23</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">24</td>
                <td class = "day" id = "5-2">25</td>
                <td class = "day" id = "5-3">26</td>
                <td class = "day" id = "5-4">27</td> 
                <td class = "day" id = "5-5">28</td> 
                <td class = "day" id = "5-6">29</td>
                <td class = "day" id = "5-7">30</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "6-1">31</td>
                <td class = "notday" id = "6-2">1</td>
                <td class = "notday" id = "6-3">2</td>
                <td class = "notday" id = "6-4">3</td> 
                <td class = "notday" id = "6-5">4</td> 
                <td class = "notday" id = "6-6">5</td>
                <td class = "notday" id = "6-7">6</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-color" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Nov(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "notday" id = "1-1" width = "100px">31</td>
                <td class = "day" id = "1-2" width = "100px">1</td>
                <td class = "day" id = "1-3" width = "100px">2</td>
                <td class = "day" id = "1-4" width = "100px">3</td> 
                <td class = "day" id = "1-5" width = "100px">4</td> 
                <td class = "day" id = "1-6" width = "100px">5</td>
                <td class = "day" id = "1-7" width = "100px">6</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "2-1">7</td>
                <td class = "day" id = "2-2">8</td>
                <td class = "day" id = "2-3">9</td>
                <td class = "day" id = "2-4">10</td>
                <td class = "day" id = "2-5">11</td>
                <td class = "day" id = "2-6">12</td>
                <td class = "day" id = "2-7">13</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">14</td>
                <td class = "day" id = "3-2">15</td>
                <td class = "day" id = "3-3">16</td>
                <td class = "day" id = "3-4">17</td> 
                <td class = "day" id = "3-5">18</td> 
                <td class = "day" id = "3-6">19</td>
                <td class = "day" id = "3-7">20</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">21</td>
                <td class = "day" id = "4-2">22</td>
                <td class = "day" id = "4-3">23</td>
                <td class = "day" id = "4-4">24</td> 
                <td class = "day" id = "4-5">25</td> 
                <td class = "day" id = "4-6">26</td>
                <td class = "day" id = "4-7">27</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">28</td>
                <td class = "day" id = "5-2">29</td>
                <td class = "day" id = "5-3">30</td>
                <td class = "notday" id = "5-4">1</td> 
                <td class = "notday" id = "5-5">2</td> 
                <td class = "notday" id = "5-6">3</td>
                <td class = "notday" id = "5-7">4</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "notday" id = "6-1">5</td>
                <td class = "notday" id = "6-2">6</td>
                <td class = "notday" id = "6-3">7</td>
                <td class = "notday" id = "6-4">8</td> 
                <td class = "notday" id = "6-5">9</td> 
                <td class = "notday" id = "6-6">10</td>
                <td class = "notday" id = "6-7">11</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-color" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-hover" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

function Dec(){
    const element = (
        <table id = "table" class="table_jun">
        <thead>
            <tr class = "week" height = "30px" >
                <th class = "Day">SUN</th>
                <th class = "Day">MON</th>
                <th class = "Day">TUE</th>
                <th class = "Day">WED</th> 
                <th class = "Day">THU</th> 
                <th class = "Day">FRI</th>
                <th class = "Day">SAT</th> 
            </tr>
        </thead>
         <tbody>
            <tr class = "week" height = "77px" border-top = "2px solid #dfdfdf;">
                <td class = "notday" id = "1-1" width = "100px">28</td>
                <td class = "notday" id = "1-2" width = "100px">29</td>
                <td class = "notday" id = "1-3" width = "100px">30</td>
                <td class = "day" id = "1-4" width = "100px">1</td> 
                <td class = "day" id = "1-5" width = "100px">2</td> 
                <td class = "day" id = "1-6" width = "100px">3</td>
                <td class = "day" id = "1-7" width = "100px">4</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "2-1">5</td>
                <td class = "day" id = "2-2">6</td>
                <td class = "day" id = "2-3">7</td>
                <td class = "day" id = "2-4">8</td>
                <td class = "day" id = "2-5">9</td>
                <td class = "day" id = "2-6">10</td>
                <td class = "day" id = "2-7">11</td>
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "3-1">12</td>
                <td class = "day" id = "3-2">13</td>
                <td class = "day" id = "3-3">14</td>
                <td class = "day" id = "3-4">15</td> 
                <td class = "day" id = "3-5">16</td> 
                <td class = "day" id = "3-6">17</td>
                <td class = "day" id = "3-7">18</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "4-1">19</td>
                <td class = "day" id = "4-2">20</td>
                <td class = "day" id = "4-3">21</td>
                <td class = "day" id = "4-4">22</td> 
                <td class = "day" id = "4-5">23</td> 
                <td class = "day" id = "4-6">24</td>
                <td class = "day" id = "4-7">25</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "day" id = "5-1">26</td>
                <td class = "day" id = "5-2">27</td>
                <td class = "day" id = "5-3">28</td>
                <td class = "day" id = "5-4">29</td> 
                <td class = "day" id = "5-5">30</td> 
                <td class = "day" id = "5-6">31</td>
                <td class = "notday" id = "5-7">1</td> 
            </tr>
            <tr class = "week" height = "77px">
                <td class = "notday" id = "6-1">2</td>
                <td class = "notday" id = "6-2">3</td>
                <td class = "notday" id = "6-3">4</td>
                <td class = "notday" id = "6-4">5</td> 
                <td class = "notday" id = "6-5">6</td> 
                <td class = "notday" id = "6-6">7</td>
                <td class = "notday" id = "6-7">8</td> 
            </tr>
        </tbody>
    </table>
    );
    const month = (
        <div id = "months" class = "months">
            <span class="month-hover" onClick = {()=>Jan()}>Jan{" "}</span>
            <span class="month-hover" onClick = {()=>Feb()}>Feb{" "}</span> 
            <span class="month-hover" onClick = {()=>Mar()}>Mar{" "}</span> 
            <span class="month-hover" onClick = {()=>Apr()}>Apr{" "}</span>
            <span class="month-hover" onClick = {()=>May()}>May{" "}</span>
            <span class="month-hover" onClick = {()=>Jun()}>Jun{" "}</span>
            <span class="month-hover" onClick = {()=>Jul()}>Jul{" "}</span> 
            <span class="month-hover" onClick = {()=>Aug()}>Aug{" "}</span> 
            <span class="month-hover" onClick = {()=>Sep()}>Sep{" "}</span> 
            <span class="month-hover" onClick = {()=>Oct()}>Oct{" "}</span> 
            <span class="month-hover" onClick = {()=>Nov()}>Nov{" "}</span> 
            <span class="month-color" onClick = {()=>Dec()}>Dec</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tables'));
    ReactDOM.render(month, document.getElementById('changeMonth')); 
}

export default Main;