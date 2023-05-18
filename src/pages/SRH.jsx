import React from "react";
import NavBar from "../components/NavBar";
import TeamsData from "../data/teamspage";
import Table from 'react-bootstrap/Table';
export default function SRH(){
  const players1 = TeamsData.srh.players;
  const players2=TeamsData.srh;
    return(
        <div>
            <NavBar />
            <div>
                  <div align="center">
                  <img src={players2.logo} alt="logo"/>   
                   <h3>{players2.shortName}</h3>
                   <h4>{players2.name}</h4>
                   <a href={players2.site}>View Site</a>
                   </div>
                   <br />
                   <br />
                   <div>
                 <h2 style={{textAlign:"center",backgroundColor:"azure"}}>BatsMen</h2>
                 <Table striped bordered hover style={{width:"700px" , marginTop:"25px"}} align="center">
                  <thead>
                    <tr>
                 <th><h3>Name</h3></th>
                  <th><h4>Role</h4></th>
                  </tr>
                  </thead>
                  <tbody>
                    {players1.batsmen.map((player)=>(
                      <tr>
                      <th><h3>{player.name}</h3></th>
                      <th><p>{player.role}</p></th>
                      </tr>
                    ))}
                  </tbody>
                  </Table>
                 <div>
                 <h2 style={{textAlign:"center",backgroundColor:"azure"}}>Bowlers</h2>
                 <Table striped bordered hover style={{width:"700px" , marginTop:"25px"}} align="center">
                  <thead>
                    <tr>
                 <th><h3>Name</h3></th>
                  <th><h4>Role</h4></th>
                  </tr>
                  </thead>
                  <tbody>
                  {players1.bowlers.map((player)=>(
                      <tr>
                      <th><h3>{player.name}</h3></th>
                      <th><p>{player.role}</p></th>
                      </tr>
                    ))}
                  </tbody>
                  </Table>
                  <div>
                 <h2 style={{textAlign:"center",backgroundColor:"azure"}}>Wicket keeper</h2>
                 <Table striped bordered hover style={{width:"700px" , marginTop:"25px"}} align="center">
                  <thead>
                    <tr>
                 <th><h3>Name</h3></th>
                  <th><h4>Role</h4></th>
                  </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th><div>{players1.wicketkeeper.name}</div></th>
                        <th><div>{players1.wicketkeeper.role}</div></th>
                     </tr>
                  </tbody>
                  </Table>
                 </div>
                 <div>
                 <h2 style={{textAlign:"center",backgroundColor:"azure"}}>AllRounders</h2>
                 <Table striped bordered hover style={{width:"700px" , marginTop:"25px"}} align="center">
                  <thead>
                    <tr>
                 <th><h3>Name</h3></th>
                  <th><h3>Role</h3></th>
                  </tr>
                  </thead>
                  <tbody>
                  {players1.allrounders.map((player)=>(
                      <tr>
                      <th><h3>{player.name}</h3></th>
                      <th><p>{player.role}</p></th>
                      </tr>
                    ))}
                  </tbody>
                  </Table>
                 </div>
                 </div>
            </div>
            <br />
        </div>
        </div>

    );
}