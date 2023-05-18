import React from "react";
import NavBar from "../components/NavBar";
import StatsData from "../data/statpage";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import {useState} from "react";

export default function Stat(){
    const [open,setOpen] = useState(false);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [open3,setOpen3]=useState(false);
    const [open4,setOpen4]=useState(false);
    const [open5,setOpen5]=useState(false);
    const [open6,setOpen6]=useState(false);
    const [open7,setOpen7]=useState(false);
    const [open8,setOpen8]=useState(false);
    const [open9,setOpen9]=useState(false);

    return(
       <div>
        <div align="center">
       <NavBar />
       <h1 align="center"> IPL Stats</h1>
       <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         ><h3> Orange Cap</h3>
      </Button>
      <Collapse in={open}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px", backgroundColor:"skyblue"}}>
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Score</h3></th>
            <th><h3>Matches</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.orangecap.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.score}</div>
            </th>
            <th>
            <div>{user.matches}</div>  
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  
      <Button 
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text"
        aria-expanded={open1} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
        <h3>Purple Cap</h3>
      </Button>
      <Collapse in={open1}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Wickets</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.purplecap.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.wickets}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  

      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open} style={{width:"800px",backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
        <h3>Most Fours</h3>
      </Button>
      <Collapse in={open2}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>fours</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.mostfours.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.fours}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  
 
      <Button
        onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text"
        aria-expanded={open3} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
       <h3>Most Sixes</h3> 
      </Button>
      <Collapse in={open3}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Sixes</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.mostsixes.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.sixes}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  
      <Button
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text"
        aria-expanded={open4} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
      <h3>  Fair Play</h3>
      </Button>
      <Collapse in={open4}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Points</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.fairplay.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.points}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  

      <Button
        onClick={() => setOpen5(!open5)}
        aria-controls="example-collapse-text"
        aria-expanded={open5} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
        <h3>Most Valulable Player</h3>
      </Button>
      <Collapse in={open5}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Points</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.mostvaluableplayer.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.points}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  
      <Button
        onClick={() => setOpen6(!open6)}
        aria-controls="example-collapse-text"
        aria-expanded={open6} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
        <h3>Best Strike Rate</h3>
      </Button>
      <Collapse in={open6}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Strike Rate</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.beststrikerate.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.strikerate}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  

<Button
        onClick={() => setOpen7(!open7)}
        aria-controls="example-collapse-text"
        aria-expanded={open7} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
       <h3> Best Batting Average</h3>
      </Button>
      <Collapse in={open7}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Average</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.bestbattingaverage.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.average}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  

<Button
        onClick={() => setOpen8(!open8)}
        aria-controls="example-collapse-text"
        aria-expanded={open8} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
        <h3>Best Economy Rate</h3>
      </Button>
      <Collapse in={open8}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Economy Rate</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.besteconomyrate.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.economyrate}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
      </Collapse>
  
<Button
        onClick={() => setOpen9(!open9)}
        aria-controls="example-collapse-text"
        aria-expanded={open9} style={{width:"800px" ,backgroundColor:"teal",borderRadius:"25px",height:"55px",marginTop:"25px"}}
         >
       <h3> Most catches</h3>
      </Button>
      <Collapse in={open9}>
      <div className="content">
            <Table striped bordered hover style={{width:"700px" , marginTop:"25px" , backgroundColor:"skyblue"}} align="center">
            <thead>
            <tr>
            <th><h3>Name</h3></th>
            <th><h3>Team</h3></th>
            <th><h3>Catches</h3></th>
            </tr>
            </thead>
            <tbody>
            {StatsData.mostcatches.map((user) => (
            <tr>
            <th>
            <div>{user.name}</div>
            </th>
            <th>
            <div>{user.team}</div>
            </th>
            <th>
            <div>{user.catches}</div>
            </th>
            </tr>
            ))}
            </tbody>
            </Table>
            </div>
         </Collapse>
        </div>
     </div>
    );
}