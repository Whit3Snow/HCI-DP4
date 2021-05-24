import React, {Component}from 'react';
import '../style/menu.css';

class Menubar extends React.Component{
    render(){
        return(
            <div>
                <div id="bar">
                    <div style={{ width:"200%", height:"50px", position:"absolute", top:'5%'}} onMouseOver={()=>{mouseon("m_main")}} onMouseOut={()=>{mouseout("m_main")}}>main</div>
                    <div style={{ width:"200%",height:"100px",position:"absolute",top:'20%'}} onMouseOver={()=>{mouseon("m_diary")}} onMouseOut={()=>{mouseout("m_diary")}}>diary</div>
                    <div style={{ width:"200%",height:"150px",position:"absolute",top:'35%'}} onMouseOver={()=>{mouseon("m_mileage")}} onMouseOut={()=>{mouseout("m_mileage")}}>mileage</div>
                    <div style={{ width:"200%",height:"100px",position:"absolute",top:'50%'}} onMouseOver={()=>{mouseon("m_logout")}} onMouseOut={()=>{mouseout("m_logout")}}>logout</div>
                </div>
                <div className="overlay" id="m_main" style={{top:'5%', display:"none"}} onMouseOver={()=>{mouseon("m_main")}} onMouseOut={()=>{mouseout("m_main")}}>
                    <div class = "list">Main</div>
                </div>
                <div className="overlay" id="m_diary"style={{top:'20%', display:"none"}} onMouseOver={()=>{mouseon("m_diary")}} onMouseOut={()=>{mouseout("m_diary")}}>
                    <div class = "list">New Posting</div>
                    <div class = "list">Diary</div>
                </div>
                <div className="overlay" id="m_mileage" style={{top:'35%', display:"none"}} onMouseOver={()=>{mouseon("m_mileage")}} onMouseOut={()=>{mouseout("m_mileage")}}>
                    <div class = "list">Mileage</div>
                    <div class = "list">Challenge</div>
                    <div class = "list">Management</div>
                </div>
                <div className="overlay" id="m_logout" style={{top:'50%', display:"none"}} onMouseOver={()=>{mouseon("m_logout")}} onMouseOut={()=>{mouseout("m_logout")}}>
                    <div class = "list">Logout</div>
                    <div class = "list">Other Groups</div>
                </div>
            </div>
        )
    }
}


function mouseon(id){
    document.getElementById(id).style.display='';
}
function mouseout(id){
    document.getElementById(id).style.display= 'none';
}

export default Menubar;