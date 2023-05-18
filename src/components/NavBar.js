import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../components/navbar.css";
import logo from "../images/logo.png";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{width:"100%",fontSize:"25px",backgroundColor:"beige"}}>
      <Container className="Navbar">
        <img src={logo} alt="ipllogo" style={{ height:"50px",width:"100px" ,margin:"-10px"}} />
        <Nav.Link href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="/stat"><b>Stat</b></Nav.Link>
            <Nav.Link href="/pointstable"><b>Points table</b></Nav.Link>
            <Nav.Link href="/teams"><b>Teams</b></Nav.Link>
            <Nav.Link href="/matches"><b>Matches</b></Nav.Link>
            <NavDropdown title="More" style={{fontWeight:"bold"}}id="collasible-nav-dropdown">
              <NavDropdown.Item href="/players" style={{fontWeight:"bold"}}>
                Players
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about" style={{fontWeight:"bold"}}>
                About
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default NavBar;