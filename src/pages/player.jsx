import React from "react";
import NavBar from "../components/NavBar";
import players from "../data/players";
import { useNavigate } from "react-router-dom";
export default function Player(){
    const navigate=useNavigate();
    return(
       <div>
        <NavBar />
        <div>
        <div style={{display:"grid",
        gridTemplateColumns: "repeat(3, 1fr)",justifyContent:"space-around",
        gridGap:"20px"}}>
            {players.map((user)=>(
                <div style={{backgroundColor:"azure",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "20px",textAlign:"center"}}>
                    <img src={user.image} alt="playerimg" style={{display: "block",margin: "0 auto 10px",width: "100%",maxWidth: "200px"}} />
                    <h1 align="center">{user.name}</h1>
                    <button align="center" onClick={()=>navigate(`/players/${user.name}`)}><h4>Click Here</h4></button>
                </div>
        ))}</div>
        </div>
        </div>
    );
}