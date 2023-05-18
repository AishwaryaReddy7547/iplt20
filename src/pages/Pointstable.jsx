import React from "react";
import NavBar from "../components/NavBar";
import tableData from "../data/Points";
import Table from 'react-bootstrap/Table';
export default function Pointstable(){
    return(
        <div>
           <NavBar />
          <Table striped bordered hover style={{width:"700px" , marginTop:"25px"}} align="center">
         <thead>
         <tr>
          <th>id</th>
          <th>Team</th>
          <th>Matches</th> 
          <th>Win</th>
          <th>Lost</th>
          <th>Points</th>
          <th>nrr</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((user) => (
          <tr>
            <th>
            <div>{user.id}</div>
            </th>
            <th><div>{user.name}</div></th>
            <th><div>{user.matches}</div></th>
            <th><div>{user.won}</div></th>
            <th><div>{user.lost}</div></th>
            <th><div>{user.points}</div></th>
            <th><div>{user.nrr}</div></th>
            </tr>
         ))}
      </tbody>
    </Table>
        </div>
    );
}
