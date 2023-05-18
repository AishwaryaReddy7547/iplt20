import React from "react";
import NavBar from "../components/NavBar";
import ScheduleData from "../data/schedule";

export default function Matches(){
    return(
        <div>
           <NavBar />
           <br />
           <h1 align="center">IPL Schedule</h1>
           <div>
           {ScheduleData.map((user) => (
            <div align="center">
            <div style={{backgroundColor:"blueviolet" ,width:"900px",borderRadius:"10px", color:"azure"}}>
            <div style={{display:"flex" , justifyContent:"space-around"}}>
            <h3>Team 1</h3>
            <h3>Team 2</h3>
            </div>
            <div style={{display:"flex" , justifyContent:"space-around"}}>
            <div>{user.team1}</div>
            <div>{user.team2}</div>
            </div>
            <div style={{display:"flex" , justifyContent:"space-around"}}>
            <h3>Venue</h3>
            <h3>Timings</h3>
            </div>
            <div style={{display:"flex" , justifyContent:"space-around"}}>
            <div>{user.venue}</div>
            <div>{user.time}</div>
            </div>
            </div>
            <br />
            </div>
            ))}
            </div>
        </div>
    );
}