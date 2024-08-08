

import "./NavbarComp.css"
import {Navbar, Nav, Button} from 'react-bootstrap';

const NavbarComp = ()=>{

    return(
        <Navbar className="h-10 fixed-top" bg="transparent" variant="dark" expand="lg">

            <Navbar.Brand id="logo" href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="navButtons" href="#home">Home</Nav.Link>
                    <Nav.Link className="navButtons" href="#ticket">Ticket</Nav.Link>
                    <Nav.Link className="navButtons" href="#trainer">Trainer</Nav.Link>
                    <Nav.Link className="navButtons" href="#diet">Diet</Nav.Link>
                    <Nav.Link className="navButtons" href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Button id="logInButton" className={"buttonGradient"}>Log in</Button>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavbarComp