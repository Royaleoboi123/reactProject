import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import App from './App.js';
import QualificationDetails from './QualificationDetails.js';
function AdminNavbar() {
    const signOut = () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location = "/Login";
    };
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{ height: "80px", fontSize: "40px", marginLeft: "0px" }}>EMPLOYEE MANAGEMENT SYSTEM</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="admin">Admin Home Page</Nav.Link>
                    <Nav.Link href="getAllEmployee">Show all Employee</Nav.Link>
                    <Nav.Link href="employeeDetails">Update Employee Details</Nav.Link>
                    <button className="btn btn-primary btn-sm" onClick={signOut} >SignOut</button>
                </Nav>
            </Container>
        </Navbar>
        <br />
        {/* <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar> */}
    </>);
}

export default AdminNavbar;
