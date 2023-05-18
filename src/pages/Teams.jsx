import React from "react";
import NavBar from "../components/NavBar";
import TeamsData from "../data/teamspage";
export default function Teams(){
    return(
      <div align="center">
        <NavBar />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"10px" ,gridTemplateRows:"auto",borderRadius:"10px",width:"max-content",justifyContent:"space-around"}}>
          {TeamsData.teams.map((user)=>(
            <a href={user.shortName}>
            <button>
            <div align="center" style={{backgroundColor:"whitesmoke", borderRadius:"10px",marginTop:"75px",height:"auto",width:"250px"}}>
            <img src={user.logo} alt="logo" style={{width:"70px",paddingTop:"10px"}}/>
            <h4>{user.shortName}</h4>
            <h5>{user.name}</h5>
            </div>
            </button>
            </a>
          ))}
        </div>
      </div>
    );
}