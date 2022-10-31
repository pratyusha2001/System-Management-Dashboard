import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const TopNav = () => {
    return (
        <div>
            <Navbar expand="lg" className="topnav">
                <Container>
                    <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "25px", marginRight: "45px" }}>XDAT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="nav-link">
                                <Button className="overview-btn">
                                    Overview
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#" className="nav-link">Partners</Nav.Link>
                            <Nav.Link href="#" className="nav-link">Widgets</Nav.Link>
                            <Nav.Link href="#" className="nav-link">APIs</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </Nav.Link> 
                            <Nav.Link href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person" viewBox="0 0 16 18">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                            </Nav.Link>  
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Form className="d-flex" style={{backgroundColor:"rgb(249,249,249)"}} >
                <Container>
                   <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 search"
                            aria-label="Search"
                        />
                        <Button className="search-btn">Report</Button>
                    </Form> 
                </Container>
            </Form>
        </div>
    )
}
export default TopNav;