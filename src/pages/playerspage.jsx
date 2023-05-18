import React from "react";
import NavBar from "../components/NavBar";
import players from "../data/players";
import { useParams } from "react-router-dom";
export default function Players(){
  const {name}=useParams();
    const userData = Object.values(players);
    let user=null;
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].name=== name) {
          user= userData[i];
          break;
        }
      }
    return(
       <div align="center">
        <NavBar />
        <div className="user-card" style={{backgroundColor:"azure",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "20px",textAlign:"center",width:"500px"}}>
          <img src={user.image} alt="image1" style={{display: "block",margin: "0 auto 10px",width: "100%",maxWidth: "200px"}} />
          <h1 style={{fontSize: "2.0rem",marginBottom: "10px"}}>{user.name}</h1>
          <div style={{margin: "0",color: "#777"}}>
          <h3>Age:{user.age}</h3>
          <h3>Country:{user.country}</h3>
          <h3>Batting Style:{user.battingStyle}</h3>
          <h3>Balls Faced:{user.ballsFaced}</h3>
          <h3>Bowling Style:{user.bowlingStyle}</h3>
          <h3>Highest Score:{user.highestScore}</h3>
          <h3>Average:{user.average}</h3>
          <h3>Innings:{user.innings}</h3>
          <h3>Matches:{user.matches}</h3>
        </div>
        </div>
    </div>
    );
}