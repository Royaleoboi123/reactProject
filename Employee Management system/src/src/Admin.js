import { Link } from "react-router-dom";
// import { Button, Navbar, Nav, Container, NavLink } from 'react-bootstrap';
// import Header from "./MyNavbar";
import pro from './propic.jpg';
import { FcConferenceCall, FcAcceptDatabase } from "react-icons/fc";
import AdminNavbar from "./AdminNavbar";
import { useEffect } from "react";

function Admin() {
    // sessionStorage.setItem("firstName", response.data[i].firstName);
    // sessionStorage.setItem("lastName", response.data[i].lastName);
    // sessionStorage.setItem("phoneNo", response.data[i].phoneNo);
    // sessionStorage.setItem("email", response.data[i].email);
    // sessionStorage.setItem("empId", response.data[i].empId)
    useEffect(() => {
        document.title = "Admin page";
        if (sessionStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        } else if (localStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        }
    }, []);
    return (<>

        <div className="container-fluid" id="home" style={{ height: "100vh", backgroundColor: "#DDC5E7" }}>
            <AdminNavbar />
            <div className="row bg-success">
                <div className="col-12 col-md-3" style={{ height: "100vh", backgroundColor: "#DDC5E7" }} >
                    <div className="row mb-5">
                        <img src={pro} className="pro-img rounded-circle mt-5 me-5" />
                    </div>
                    <div>
                        <h1>EmpId :<i>{sessionStorage.getItem("empId")}</i></h1>
                        <p>FirstName :<i>{sessionStorage.getItem("firstName")}</i></p>
                        <p>LastName :<i>{sessionStorage.getItem("lastName")}</i></p>
                        <p>Email :<i>{sessionStorage.getItem("email")}</i></p>
                        <p>Phone :<i>{sessionStorage.getItem("phoneNo")}</i></p>
                    </div>
                </div>
                <div className="col-12 col-md-9" style={{ backgroundColor: "#E9EAEC" }}>


                    <div className="row mt-5">
                        <div className="col-12 col-md-6">
                            <div className="card p-4 mycard">
                                <div className="card-body bg-danger bg-opacity-10">
                                    <h5 className="card-title">
                                        <FcConferenceCall className="gly" />
                                    </h5>
                                    <h1 className="card-text">
                                        Show all employees..
                                    </h1>
                                    <Link to="/getAllEmployee" className="text-info ">
                                        <button className="btn btn-warning mt-3">
                                            view
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card p-4 mycard">
                                <div className="card-body bg-danger bg-opacity-10">
                                    <h5 className="card-title">
                                        <FcAcceptDatabase className="gly" />
                                    </h5>
                                    <h1 className="card-text">
                                        Update employee details
                                    </h1>
                                    <Link to="/employeeDetails" className="text-info ">
                                        <button className="btn btn-warning mt-3">
                                            Add
                                        </button>
                                    </Link>

                                    <Link to="/pleaseUpdateEmpDetails" className="text-info ">
                                        <button className="btn btn-warning mt-3 ms-3">
                                            update
                                        </button>
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Admin;