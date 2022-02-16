import { Link } from "react-router-dom";
import { FcVoicePresentation, FcAddDatabase, FcAdvertising } from "react-icons/fc";
import pro from './pro2.png';
import Navbar1 from "./Navbar";
import axios from "axios";
import { useEffect } from "react";


function EmpPage() {
    useEffect(() => {
        document.title = "Employee page";
        if (sessionStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        }
        else if (localStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        }
    }, []);
    return (

        <>

            <div className="container-fluid" id="home" style={{ backgroundColor: "#B4D2EA" }}>
                <Navbar1 />
                {/* <div className="row bg-dark text-light" style={{ height: "100px" }}>
                <div className="col-10 col-md-10 mt-3">
                    <div href="#home" className='fw-bold fs-1'>EMPLOYEE MANAGEMENT SYSTEM </div>
                </div>
                <div className="col-2 col-md-2 mt-4">
                    <div className="d-flex justify-content-end">
                        <Link to="/login" className='text-decoration-none text-light fs-4'>Employee Logged in</Link>
                    </div>
                </div>
            </div> */}
                <div className="row bg-success">
                    <div className="col-12 col-md-3" style={{ backgroundColor: "#B4D2EA" }} >
                        <div className="row mb-5">
                            <img src={pro} className="pro-img rounded-circle mt-5 me-5" style={{ height: "350px" }} />
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
                        <div className="row mt-1">

                            <div className="col-12 col-md-6">
                                <div className="card p-4 mycard">
                                    <div className="card-body bg-danger bg-opacity-10">
                                        <h5 className="card-title">
                                            <FcAddDatabase className="gly" />
                                        </h5>
                                        <h1 className="card-text">
                                            Edit qualification details..
                                        </h1>
                                        <Link to="/qualificationdetails" className="text-info ">
                                            <button className="btn btn-warning mt-3">
                                                Add
                                            </button>
                                        </Link>
                                        <Link to="/UpdateQualification" className="text-info ">
                                            <button className="btn btn-warning mt-3 ms-5">
                                                Update
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="card p-4 mycard">
                                    <div className="card-body bg-danger bg-opacity-10">
                                        <h5 className="card-title">
                                            <FcVoicePresentation className="gly" />
                                        </h5>
                                        <h1 className="card-text">
                                            Edit permenent address..
                                        </h1>
                                        <Link to="/address-details" className="text-info ">
                                            <button className="btn btn-warning mt-3">
                                                Add
                                            </button>
                                        </Link>
                                        <Link to="/Updateaddress" className="text-info ">
                                            <button className="btn btn-warning mt-3 ms-5">
                                                Update
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="card p-4 mycard">
                                    <div className="card-body bg-danger bg-opacity-10">
                                        <h5 className="card-title">
                                            <FcAdvertising className="gly" />
                                        </h5>
                                        <h1 className="card-text">
                                            Edit emergency address..
                                        </h1>
                                        <Link to="/address-details" className="text-info ">
                                            <button className="btn btn-warning mt-3">
                                                Add
                                            </button>
                                        </Link>
                                        <Link to="/Updateaddress" className="text-info ">
                                            <button className="btn btn-warning mt-3 ms-5">
                                                Update
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

export default EmpPage;